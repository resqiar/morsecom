package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html/v2"
	"github.com/joho/godotenv"
)

var (
	engine = html.New("./views", ".html")
)

func main() {
	godotenv.Load()

	server := fiber.New(fiber.Config{
		Views: engine,
	})

	server.Static("/", "./views/static")

	server.Get("/", func(c *fiber.Ctx) error {
		return c.Render("index", nil)
	})

	if e := server.Listen(":5000"); e != nil {
		log.Fatal(e)
	}
}
