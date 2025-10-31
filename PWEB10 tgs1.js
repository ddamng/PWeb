var nama
var harga
var jumlah
var total
nama=prompt("Masukkan Nama Barang :")
harga=prompt("Masukkan Harga Barang :")
jumlah=prompt("Masukkan Jumlah Beli :")
total=harga*jumlah
document.write("<table border='1'>")
document.write("<tr><td>Nama Barang : "+nama+"</td>")
document.write("<tr><td>Harga Barang : "+harga+"</td>")
document.write("<tr><td>Jumlah Beli : "+jumlah+"</td>")
document.write("<tr><td>Total Harga : "+total+"</td><br>")
document.write("<tr><td>Hariri</tr></td>")
document.write("</table>")