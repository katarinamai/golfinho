package main

import (
	"fmt"
	"math"
	"strconv"
)

// Function that separate the salary
func budget(salary float64, reserva string) (
	string, float64,
	string, float64,
	string, float64,
	string, float64,
	string, float64) {

	// salary separation (percent)
	essencialPerc := 0.55
	aposentadoriaPerc := 0.1
	educacaoPerc := 0.05
	objetivoPerc := 0.2
	livrePerc := 0.1

	// value of salary separeted ($)
	essencialReal := math.Round(salary * essencialPerc)
	aposentadoriaReal := math.Round(salary * aposentadoriaPerc)
	educacaoReal := math.Round(salary * educacaoPerc)
	objetivoReal := math.Round(salary * objetivoPerc)
	livreReal := math.Round(salary * livrePerc)
	mensagem := ""

	if reserva == "N" {
		reservaTot := salary * 6
		reservaRest := math.Round(reservaTot / objetivoReal)
		mensagem = "Faltam: " + strconv.FormatFloat(reservaRest, 'f', -1, 64) + " meses " + " deposite por mês: "
	} else {
		mensagem = "Use esse valor para um objetivo: "
	}

	return "essencial: ", essencialReal,
		"aposentadoria: ", aposentadoriaReal,
		"educacao: ", educacaoReal,
		"livre: ", livreReal,
		mensagem, objetivoReal
}

func main() {

	//fmt.Println("Olá Mundo!")
	fmt.Println(budget(3500, "N"))
}
