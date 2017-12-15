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

	function onSelectedTicket() {
		let box = $(this).closest('.sell-ticket-box');
		$(box.find('.ticket-selected')).css('background-color', 'rgba(0, 0, 0, 0.75)').css('z-index', 4);
		$(box.find('.confirm-icon')).css('opacity', '1');
	}

	function onDeselectedTicket() {
		let elem = $(this);
		elem.css('background-color', 'rgba(0, 0, 0, 0)');
		elem.find('.confirm-icon').css('opacity', 0);

		setTimeout(function() {
			elem.css('z-index', 0)
		}, 500);
	}

	$('.ticket-selected').click(onDeselectedTicket);
	$('.sell-ticket-box .icon-Add-Bag').click(onSelectedTicket);
	$('#inp-precio-venta').keyup(calculate);
}

$(main);