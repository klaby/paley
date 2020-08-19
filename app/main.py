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
    if sys.argv[1] == "--develop":
        directory = "dist"
        page = {"port": 4000}
        args=['./node_modules/.bin/electron', '.']
    else:
        directory = "dist"
        page = "index.html"
        args=['electron', '.']

    eel.init(directory)

    eel_kwargs = dict(host="localhost", port=8080, cmdline_args=args)

    eel.start(page, mode="electron", **eel_kwargs)
