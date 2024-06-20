import {render, screen, fireEvent, waitFor} from "../../test-utilts";
import Cita from "./Cita";

describe("Pruebas en Cita", () => {
	test("Debe verificar que la cita sea del personaje ingresado", async () => {
		render(<Cita />);

		const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i);
		fireEvent.change(input, {target: {value: "Lisa"}});

		const boton = await screen.findByText(/Obtener Cita/i);
    fireEvent.click(boton);
    
    await waitFor(() => {
      expect(screen.getByText(/Lisa Simpson/i)).toBeInTheDocument()

      screen.debug();
    });

  });
  
  test('Obtener cita aleatoria', async() => {
    render(<Cita />);

    const boton = await screen.findByText(/Obtener cita aleatoria/i);
    fireEvent.click(boton);


    await waitFor(() => {
      expect(screen.getByText(/Homer Simpson/i)).toBeInTheDocument()
    });

    screen.debug();
  
  })

  test('borrar cita', async() => {
    render(<Cita />);

    const boton = await screen.findByText(/Obtener cita aleatoria/i);
    fireEvent.click(boton);
    const BTNborrar = await screen.findByText(/Borrar/i);
    fireEvent.click(BTNborrar);

    await waitFor(() => {
      expect(screen.getByText(/No se encontro ninguna cita/i)).toBeInTheDocument()
    });

    screen.debug();
  
  })
});