#!/usr/bin/env python

import eel
import sys
import random
import subprocess

sys.path.insert(1, "../../")

@eel.expose
def picker():
    return (
        subprocess.Popen(
            'grim -g "$(slurp -p)" -t ppm - | convert - -format "%[pixel:p{0,0}]" txt:-',
            shell=True,
            executable="/bin/bash",
            stdout=subprocess.PIPE,
        )
        .stdout.read()
        .decode("utf-8")
    )



if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "--develop":
        eel.init("dist")
        page = {"port": 4000}
        args=['./node_modules/.bin/electron', '.']
    else:
        page = "index.html"
        args=['/usr/lib/paley/app.asar']

    eel_kwargs = dict(host="localhost", port=8080, cmdline_args=args)

    eel.start(page, mode="electron", **eel_kwargs)
