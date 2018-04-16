const { Chromeless } = require('chromeless')

const RESULT_DOM = '#Header'

const data = [
	{
		fterm: 'xx',
		fgroup: 'x',
		fnumFr: 'xxxxxxx',
		fnumto: 'xxxxxxx',
	},
]

const run = async ({ fterm, fgroup, fnumFr, fnumto }) => {
	const chromeless = new Chromeless()
	const isReceive = await chromeless
		.goto('http://psc.gsb.or.th/PSCINQ/actions/PscInput.do')
		.type(fterm, 'input[name="fterm"]')
		.type(fgroup, 'input[name="fgroup"]')
		.type(fnumFr, 'input[name="fnumFrom"]')
		.type(fnumto, 'input[name="fnumto"]')
		.click('input[type="image"]')
		.wait(RESULT_DOM)
		.exists(RESULT_DOM)
	return isReceive
}
const main = async () => {
	await run(data[0])
}

main()
