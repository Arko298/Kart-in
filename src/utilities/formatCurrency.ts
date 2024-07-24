const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined,{
    style: 'currency',
    currency:"Rupees",
})

export default function formatCurrency(number:number){
    return CURRENCY_FORMATTER.format(number)
}