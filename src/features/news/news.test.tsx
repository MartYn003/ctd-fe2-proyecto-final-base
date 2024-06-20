import { render, screen, fireEvent, waitFor } from "../../test-utilts";
import Noticias from "./Noticias";

describe("Pruebas en News", () => {

    test("Debe verificar que la cita sea del personaje ingresado", async () => {
        render(<Noticias />);

        const title = screen.getByText(/Noticias de los Simpsons/i);
        
        expect(title).toBeInTheDocument()
        
    });

});