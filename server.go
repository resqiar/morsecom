package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	server := fiber.New()

	server.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	if e := server.Listen(":5000"); e != nil {
		log.Fatal(e)
	}
}
