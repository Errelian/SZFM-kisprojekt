# Számrendszer átalakító rendszerszerterv

## 1. A rendszer célja

Mit akarunk csinálni az alkalmozattaknak.

## 2. A projekt terve

A weboldal HTML, CSS és a Javascript technológiák révén fog megvalósulni.

A fejlesztők csapata négy személyből áll, mindenki saját felelőségekkel rendelkezik:
* Vas Ruben Levente - HTML
* Somogyi Viktória - CSS
* Görög Balázs - Javascript
* Pintér Balázs - Tesztelés, integráció

A fejlesztők csapata a saját, általuk biztosított gépeken fogják végezni a fejlesztést.


### 2.1 Mérföldkövek

pl: [01] Feladatok kiosztása
    [02] Integrálás stb

### 2.2 Ütemterv

pl: hogyan és milyen sorrendben érjük el a mérföldköveket, ez is olyan felsorolás legyen mint az előző

## 3. Modell az üzleti folyamatokhoz

### 3.1.1. Szereplők:
 * Kommunikációs Dolgozó

### 3.1.2. Erőforrások:
 * Bármilyen eszköz, amely képes Javascript/HTML oldalakat megjeleníteni és lekezelni
 * Szervergép
 * Hálózati kapcsolat
 
### 3.1.3. Bemenetek:
 * Szám és számrendszer

### 3.1.4. Entitások:
 * A számrendszer átalakító oldal

### 3.1.5. Kimenet:
 * A kommunikációs dolgozó által kívánt szám a kívánt számrendszerben

### 3.1.6. Folyamat:

A kommunikációs dolgozó át kíván küldeni egy számot adott számrendszerben az ügyfélnek -> Leellenőrzi hogyy a kívánt számrednszer megegyezik a a jelenlegivel.

Ha igen: Átküldi a számot, a kommunikáció gond nélkül folytatódik.

Ha nem: Beírja a weboldalba a kívánt számrendszert, a jelenlegi számrendzsert, és magát a számot. -> Megnyomja az átváltás gombot -> Leolvassa a szám új alakját. -> átküldi az ügyfélnek, a kommunikáció gond nélkül folytatódik.

### 3.1.7: Folyamatábra:

[insert folyamatábra here]


### 3.1.8: Példa:

## 4. Követelmények

Az előző dokumentumok követelményeinek magyarázata. Pl 
## [01] Valami
    A weboldal xy-ja yx-el fog megvalósulni.


## 5. Funkcionális terv

### 5.1. Az elkészítendő rendszer tulajdonságai

Pl: Egy olyan weboldal amely:
    -cucc1
    -cucc2

### 5.2. Rendszerszereplők
Pl:
    -Weboldal
    -Szerver
    -Kliensoldali megjelenítő: + nagy rövid leírások

### 5.2. Rendszerhasználati esetek és lefutásaik

#### 5.2.1. Számrendszer-átalakítás

##### 5.2.1.1. A Funkcionalitás leírása

Pl: Legyen a weboldalin xy ami yx-et csinál és xxy-t ad vissza.

[Képernyőterv, felszámozva]()

##### 5.2.1.2. Példa lefutás/Használati eset

Életbeli példa arról hogy 5.2.1.1 hogy történik.


## 6. Fizikai környezet

A projekt megvalósítás szerint egy weboldal, ami azt jelenti hogy bármely webes felületet megjeleníteni tudó eszközre készül.
 * A kliens által biztosított eszközök:
    - Webszerver
    - Megjelenítésre képes asztali gép.
* Fejlesztők által használt eszközök, technológiák:
    - Git
    - Visual Studio Code
    - Microsoft Paint
    - yEd Graph Editor
* Tesztelt környezetek:
    - Microsoft Edge (Chromium)
    - Google Chrome
    - Mozilla Firefox
    - Opera


## 7. Absztrakt domain modell

A rendszer, a weboldal, kialakítását, megjelenítését a HTML és CSS technológiák határozzák meg, míg a funkcionalitást a beépített Javascript szkript valósítja meg, aminek a bemenetét és kimenetét HTML formok valósítják meg.


![Domain modell gráf](/img/domainmodell.png)

## 8. Architekturális terv

Megbeszélés után úgy döntöttünk hogy nem készítjük el, mivel a weboldalnak csak egy rétegje van.



## 9. Adatbázisterv

A weboldal nem kezel adatbázist, ezért ennek az elkészítése szükségtelen.



## 10. Implementációs terv

Nem kerül elkészításre, mivel a weboldalban szereplő osztályok kicsik, a kapcsolatok köztük triviálisak.


## 11. Teszt tervek

Alacsonyabb szintű pontokban mit hogy és hogyan fogunk letesztelni.


## 12. Telepítési tervezet.

Hogyan fogjuk feltelepíteni.

## 13. Karbantartási tervezet.

Szükségtelen, mivel a weboldal természetéből eredendően nincs szükség karbantartásra, csak esetleges javítócsomagokra.