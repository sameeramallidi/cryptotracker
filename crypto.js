const form=document.getElementById('searchForm');
const res=document.getElementById('resTable');

form.addEventListener('submit',(e)=>{

    e.preventDefault();
    const ctype=form.elements.coinType.value;
    console.log(ctype);
    fetchPrice(ctype);
});
const fetchPrice=async(ctype)=>{
    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=INR`)
    console.log(r);
    const price = r.data.coin.price;
    const volume = r.data.coin.volume;
    const change = r.data.coin.priceChange1d;
    const base = r.data.coin.name;
    const target = 'USD';

    res.innerHTML=  `<tr>
    <th> Property </th>
    <th> Value </th>
</tr>
<tr>
    <td> ${base} </td>
    <td> ${price} ${target}  </td>
</tr>
<tr>
    <td> Volume </td>
    <td> ${volume} </td>
</tr>
<tr>
    <td> Change </td>
    <td> ${change} </td>
</tr>`
}