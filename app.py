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
    else:
        directory = "dist"
        page = "index.html"

    eel.init(directory, [".tsx", ".ts", ".jsx", ".js", ".html"])

    eel_kwargs = dict(host="localhost", port=8080, size=(300, 350))

    eel.start(page, mode="chrome", **eel_kwargs)
