package handlers

import (
	"strings"

	"github.com/gofiber/fiber/v2"
)

var (
	decode_list = map[string]string{
		".-":    "A",
		"-...":  "B",
		"-.-.":  "C",
		"-..":   "D",
		".":     "E",
		"..-.":  "F",
		"--.":   "G",
		"....":  "H",
		"..":    "I",
		".---":  "J",
		"-.-":   "K",
		".-..":  "L",
		"--":    "M",
		"-.":    "N",
		"---":   "O",
		".--.":  "P",
		"--.-":  "Q",
		".-.":   "R",
		"...":   "S",
		"-":     "T",
		"..-":   "U",
		"...-":  "V",
		".--":   "W",
		"-..-":  "X",
		"-.--":  "Y",
		"--..":  "Z",
		"-----": "0",
		".----": "1",
		"..---": "2",
		"...--": "3",
		"....-": "4",
		".....": "5",
		"-....": "6",
		"--...": "7",
		"---..": "8",
		"----.": "9",
		".-.-.": "+",
		"-...-": "=",
	}
)

func InitAPIHandler(server *fiber.App) {
	api := server.Group("api")

	api.Post("/decrypt", func(c *fiber.Ctx) error {
		code := c.FormValue("code")

		var result strings.Builder

		for _, v := range strings.Split(string(code), " ") {
			if val, ok := decode_list[v]; ok {
				result.WriteString(val)
			}
		}

		return c.SendString(result.String())
	})
}
