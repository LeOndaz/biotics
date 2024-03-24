from core import create_app

if __name__ == "__main__":
    app = create_app()

    # TODO: port should be in env
    app.run(debug=True, port=8080)
