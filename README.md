## about:hello-world

![Screenshot][screenshot]

**hello-quokka** is an example Quokka toolkit component (it can be easily ported to the browser namespace. This exercise will, however, be left up to the reader 😺).

It is highly advised new Quokka developers build this component in order to get themselves acquainted with the overall development process.

### Build instructions

1. If you haven't done so already, clone the main repository.
   * ``git clone https://github.com/Anima-OS/Quokka.git``
2. ``cd`` into [Quokka/toolkit/components][components directory].
3. Add the ``hello-quokka`` submodule.
   * ``git submodule add https://github.com/Anima-OS/hello-quokka.git hello-quokka``
4. Add the new component's folder name to the ``DIRS += [`` array inside the
   components' root [moz.build][components moz.build].
   * Mind the alphabetical order!
5. ``cd`` into the Quokka source tree's root directory and build the project.
   * ``mach build``
6. After a successful build (🎉Congratulations🎉), boot up Quokka.
   * ``mach run``
7. Visit ``about:hello-world``.
8. Profit(?)


[screenshot]: screenshot.png

[components directory]: https://github.com/Anima-OS/Quokka/tree/master/toolkit/components

[components moz.build]: https://github.com/Anima-OS/Quokka/tree/master/toolkit/components/moz.build#L14
