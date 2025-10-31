var jenisMinuman;
    jenisMinuman = prompt('Masukkan jenis minuman:');
switch (jenisMinuman.toLowerCase()) {
    case 'teh gelas':
        document.writeln('<h2>Hari ini minum Teh Gelas</h2>');
        break;
    case 'kopikap':
        document.writeln('<h2>Hari ini minum Kopikap</h2>');
        break;
    case 'ale ale':
        document.writeln('<h2>Hari ini minum Ale Ale</h2>');
        break;
    case 'air putih':
        document.writeln('<h2>Hari ini minum Air Putih</h2>');
        break;
    default:
        document.writeln('<h2>Minuman tidak tersedia</h2>');
}