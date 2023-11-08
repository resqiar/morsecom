package handlers

import "github.com/gofiber/fiber/v2"

func InitWebHandler(server *fiber.App) {
	server.Get("/", func(c *fiber.Ctx) error {
		return c.Render("index", nil)
	})
}
