# Számrendszer átalakító követelmény specifikáció

## 1 Jelenlegi Helyzet

A Macrohard Kft. munkatársai gyakran találják maguk olyan helyzetben, ahol a kliensekkel való kommunikáció közben gyorsan és pontosan kell kettes, nyolcas, tízes, tizenhatos és húszas számszerdszerek között átváltásokat végezni, amit jelen pillanatban csak lassan, kézzel tudnak elvégezni, ami kifejezetten lassítja a kommunikációt ezekben a szituációkban.

## 2 Vágyott Helyzet

A Macrohard Kft. fejlődése érdekében és a hatékony kommunikáció elérése érdekében egy különálló digitális számrendszer-átváltó alkalmazás implementálására lenne szükség.

Az alkalmazás legyen egyszerű, könnyen kezelhető, esztétikus, kliens-oldalú és alacsony erőforrásigényű.

## 3 Jelenlegi üzleti folyamatok

### 3.1 Klienssel való kommunikáció

A munkatársaink kézileg átváltják azokat a számokat, amelyekre szerintük szükség lesz a kommunikáció során. =>
A munkatársaink felveszik a kapcsolatot az ügyféllel, és megkezdik a kommunikációt. =>
Ha esetleg olyan számra lenne szükség, amely nem lett előkészítve, akkor egy munkatárs kézzel átváltja azt a megfelelő számrendszerbe.

## 4 Igényelt üzleti folyamat

### 4.1 Klienssel való kommunikáció

A munkatársaink a gyors átváltás lehetősége miatt felveszik a kapcsolatot az ügyfélel különösebb előkészületek nélkül. =>
A munkatársaink átváltják a szükséges számokat a webes felületen, ami gyors és megbízható, ezzel gyorsítva a kommunikációt, csökkentve az egy kliensel töltött időt, növelve a munkatársaink kapacitását.

## 5 A Rendszerre vonatkozó szabályok

A webes felület HTML-ben legyen megvalósítva.

A webes felület funkcionalitása JavaScriptel, kliensoldalon legyen megvalósítva.

A webes felület esztétikailag CSS-el legyen stílusozva.

A weboldal legyen esztétikus.

A weboldal használjon kevés erőforrást.

A webes felület működjön a szerverre való csatlakozás nélkül is.

A rendszer képes legyen kettes és húszas között bármely számrendszerre átváltani.
## 6 Követelménylista

* [K01] Hordozhatóság
* [K02] Gyors működés
* [K03] Könnyű kezelhetőség
* [K04] Pontos átváltások