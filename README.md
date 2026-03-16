Aarex's fork of The Chronometrica
## Credits
- Jax G for the original idea of The Chronometrica. Their PenguinMod project determining the value can be found here: https://studio.penguinmod.com/fullscreen.html?fps=60&size=640x360#0199814286
- theuserwhoishere for the original version of HTML port. It can be found in a different repository: https://github.com/theuserwhoishere/Chronometrica
- The BBN spreadsheet for number info on numarray.js (names, symbols, abmetric index, equivalent entries)
## Formula
### Regular (abmetric index from days since 2/16/26 in UTC)
$$3*\sqrt[365]{\frac{23}{3}}^{d}$$, where d = days since 2/16/26
### Inverse (days since 2/16/26 in UTC from abmetric index)
$$\log_{\sqrt[365]{\frac{23}{3}}}(\frac{a}{3})$$, where a = abmetric index
