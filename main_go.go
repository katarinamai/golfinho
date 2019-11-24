package main

import "fmt"

// Function that separate the salary
func budget(salary float64) (
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
	essencialReal := salary * essencialPerc
	aposentadoriaReal := salary * aposentadoriaPerc
	educacaoReal := salary * educacaoPerc
	objetivoReal := salary * objetivoPerc
	livreReal := salary * livrePerc

	return "essencial: ", essencialReal,
		"aposentadoria: ", aposentadoriaReal,
		"educacao: ", educacaoReal,
		"objetivo: ", objetivoReal,
		"livre: ", livreReal
}

func main() {
	//fmt.Println("Olá Mundo!")
	fmt.Println(budget(3500))
}
