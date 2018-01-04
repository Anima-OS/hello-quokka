"use strict";

// Register the about:hello-world URL.
const Ci = Components.interfaces;
const Cu = Components.utils;

const { XPCOMUtils } = Cu.import("resource://gre/modules/XPCOMUtils.jsm", {});
const { Services } = Cu.import("resource://gre/modules/Services.jsm", {});

const { nsIAboutModule } = Ci;

function AboutHelloWorld() { }

AboutHelloWorld.prototype = {
  uri: Services.io.newURI("chrome://global/content/hello-quokka/hello-quokka.html"),
  classDescription: "about:hello-world",
  classID: Components.ID("e97ba230-f016-11e7-8f1a-0800200c9a66"),
  contractID: "@mozilla.org/network/protocol/about;1?what=hello-world",

  QueryInterface: XPCOMUtils.generateQI([nsIAboutModule]),

  newChannel: function (uri, loadInfo) {
    let chan = Services.io.newChannelFromURIWithLoadInfo(
      this.uri,
      loadInfo
    );
    chan.owner = Services.scriptSecurityManager.getSystemPrincipal();
    return chan;
  },

  getURIFlags: function (uri) {
    return nsIAboutModule.ALLOW_SCRIPT;
  }
};

this.NSGetFactory = XPCOMUtils.generateNSGetFactory([
  AboutHelloWorld
]);