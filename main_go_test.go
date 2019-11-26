package main

import "testing"

func TestMain_go_1(t *testing.T) {
	budget(0, "S")
	t.Log("S")
}

func TestMain_go_2(t *testing.T) {
	budget(0, "N")
	t.Log("N")
}

func TestMain_go_3(t *testing.T) {
	budget(0.5, "")
	t.Log("")
}
