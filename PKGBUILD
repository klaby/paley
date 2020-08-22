# Maintainer: Romullo <developermarsh@gmail.com>
pkgname=paley
pkgver=0.0.0
pkgrel=1
epoch=0
pkgdesc="A simple color picker for Sway."
arch=("x86_64")
url="https://github.com/hiukky/paley"
license=('MIT')
source=("https://github.com/hiukky/paley/archive/develop.zip")
validpgpkeys=()
md5sums=('SKIP')
_branch='develop'

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
  sudo mkdir -p "/usr/lib/$pkgname"
  sudo rsync -a "$srcdir/$pkgname-$_branch/release/$pkgname" "/usr/lib/$pkgname/$pkgname"
  sudo rsync -a "$srcdir/$pkgname-$_branch/out/linux-unpacked/resources/app.asar" "/usr/lib/$pkgname"
  sudo bash -c "echo -e '#!/bin/n=bash \n exec /usr/lib/paley/paley' > /usr/bin/$pkgname"
  sudo chmod 755 "/usr/lib/$pkgname/$pkgname"
}
