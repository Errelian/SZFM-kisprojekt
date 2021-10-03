# Számrendszer átváltó tesztelése

A tesztelési terv szerint a ciklusokat két külön kategóriára bontjuk.

## Vizuális tesztelés
### Koncepció

Az oldalon megjelenő elemek, és a main.css-ben meghatározott vizuális megszorítások ellenőrzése a gyakorlatban. A tesztelés során használt böngészők az alábbiak voltak:

#### Windows 10
  - Chrome
  - Firefox
  - Opera
  - Edge
  - Internet Explorer

#### MacOS Big Sur (11.2.3)
  - Safari

### Eredmény
A tesztelés konklúziója, hogy mivel a stíluslapban relatív értékek kerültek megadásra, így az oldal adaptív, és valós időben képes alkalmazkodni a böngészőablak átméretezéséhez. Internet Explorer alatt jelentkeztek grafikai problémák, melyek megoldását elvetettük, hiszen a Microsoft is az Edge böngészőt ajánlja az Internet Explorer helyett, ahol a probléma nem jelentkezett.


## Funkciónális tesztelés

### Koncepció

Az elkészült projekt számrendszerek átváltására képes. Hogy meggyőződjünk a konverziók helyességéről a számrendszer átváltót extenzív tesztelésnek vetjük alá Selenium WebDriver segítségével.

#### Platform
  - MacOS Big Sur (11.2.3)

#### Driver
  - Safari WebKit (Release 113)

### testing.py
A teszt futtatásához Python 3.9.5-öt használtunk. A kód először megnyitja a converter.html fájlt, majd a bemeneti szövegdobozba beír egy random generált (decimális) számot. Ezután törli a célalap placeholder szövegét, és egy 2 és 36 között generált véletlen számmal tölti ki. A numpy library segítségével elvégzi a számítást, és összehasonlítja az eredményül kapott két számot. A futás végén kapunk egy összesítést, melyben látszik, hány teszt volt sikeres.

### Eredmény

Manuális tesztelés során, illetve a tesztet többször futtatva is 0%-os hibaarányt kapunk, így megállapíthatjuk, hogy a funkcionális tesztelés sikeres volt, nincs szükség beavatkozásra.
