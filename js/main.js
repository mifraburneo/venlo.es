function main() {
	function calculate() {
		let precio = $('#inp-precio-venta').val();
		let ingresos = (precio - 30) / 1.15;
		let comision = ingresos * 0.15;

		if (ingresos < 0 || comision < 0) {
			comision = 0;
			ingresos = 0;
		}

		$('#inp-com-venta').val(`US$ ${parseResult(comision)}`);
		$('#inp-ingresos').val(`US$ ${parseResult(ingresos)}`);
	}

	function parseResult(result) {
		if (result === 0) return 0;
		if (result % 1 === 0) {
			result = `${result}.00`
		} else {
			result = round(result);
		}

		return result;
	}

	function round(x) {
		return Number(Math.round(x +'e2')+'e-2');
	}

	$('#inp-precio-venta').keyup(calculate);
}

$(main);