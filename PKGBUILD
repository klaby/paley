# Maintainer: Romullo <developermarsh@gmail.com>

_branch='develop'

pkgname=paley
pkgver=0.0.0
pkgrel=1
epoch=0
pkgdesc="A simple color picker for Sway."
arch=("x86_64")
url="https://github.com/hiukky/paley"
license=('MIT')
source=("https://github.com/hiukky/paley/archive/$_branch.zip")
validpgpkeys=()
depends=('grim' 'slurp')
makedepends=('git' 'yarn' 'python')
md5sums=('SKIP')

prepare() {
	cd $srcdir/$pkgname-$_branch

  yarn
  python3 -m venv "$srcdir/$pkgname-$_branch/env"
  source "$srcdir/$pkgname-$_branch/env/bin/activate"
  pip install -r requirements.txt
}

build() {
  cd $srcdir/$pkgname-$_branch

  yarn electron-build && yarn build:eel
}

package() {
	cd $srcdir/$pkgname-$_branch

  install -Dm644 "out/linux-unpacked/resources/app.asar" "$pkgdir/usr/lib/$pkgname/app.asar"
  install -Dm644 "release/$pkgname" "$pkgdir/usr/lib/$pkgname/$pkgname"
  install -Dm644  "$srcdir/$pkgname-$_branch/assets/paley.png" "$pkgdir/usr/share/$pkgname/$pkgname.png"
  install -dm755 "$pkgdir/usr/bin/"

  bash -c "echo -e '#!/bin/bash\n exec /usr/lib/$pkgname/$pkgname' > $pkgdir/usr/bin/$pkgname"

  chmod +x "$pkgdir/usr/lib/$pkgname/$pkgname"
  chmod +x "$pkgdir/usr/bin/$pkgname"
}
