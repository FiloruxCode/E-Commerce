const express = require('express');
const app = express();
const port = 3000;

document.addEventListener('DOMContentLoaded', () => 
const products = [
  // CPUs
  { id: 1, name: "Intel Core i9-12900K", category: "cpu", brand: "Intel", price: 529.99 },
  { id: 2, name: "AMD Ryzen 9 5900X", category: "cpu", brand: "AMD", price: 449.99 },
  { id: 3, name: "Intel Core i5-12600K", category: "cpu", brand: "Intel", price: 299.99 },
  { id: 4, name: "AMD Ryzen 7 5800X", category: "cpu", brand: "AMD", price: 329.99 },
  { id: 5, name: "Intel Core i3-12100F", category: "cpu", brand: "Intel", price: 129.99 },
  { id: 6, name: "AMD Ryzen 5 5600X", category: "cpu", brand: "AMD", price: 199.99 },
  { id: 7, name: "Intel Xeon W-2295", category: "cpu", brand: "Intel", price: 1249.99 },
  { id: 8, name: "AMD Threadripper 3960X", category: "cpu", brand: "AMD", price: 1399.99 },
  { id: 9, name: "Intel Core i7-12700H", category: "cpu", brand: "Intel", price: 399.99 },
  { id: 10, name: "AMD Ryzen 3 3200G", category: "cpu", brand: "AMD", price: 99.99 },

  // GPUs
  { id: 11, name: "NVIDIA GeForce RTX 3080", category: "gpu", brand: "NVIDIA", price: 699.99 },
  { id: 12, name: "AMD Radeon RX 6800 XT", category: "gpu", brand: "AMD", price: 649.99 },
  { id: 13, name: "NVIDIA GeForce RTX 3060 Ti", category: "gpu", brand: "NVIDIA", price: 399.99 },
  { id: 14, name: "AMD Radeon RX 6700 XT", category: "gpu", brand: "AMD", price: 479.99 },
  { id: 15, name: "NVIDIA GeForce RTX 4090", category: "gpu", brand: "NVIDIA", price: 1599.99 },
  { id: 16, name: "AMD Radeon RX 7900 XT", category: "gpu", brand: "AMD", price: 899.99 },
  { id: 17, name: "Intel Arc A750", category: "gpu", brand: "Intel", price: 249.99 },
  { id: 18, name: "Intel Arc A770", category: "gpu", brand: "Intel", price: 329.99 },
  { id: 19, name: "NVIDIA GeForce GTX 1660 Super", category: "gpu", brand: "NVIDIA", price: 239.99 },
  { id: 20, name: "AMD Radeon RX 5600 XT", category: "gpu", brand: "AMD", price: 279.99 },

  // PSUs
  { id: 21, name: "Corsair RM850x", category: "psu", brand: "Corsair", price: 149.99 },
  { id: 22, name: "EVGA SuperNOVA 750 G5", category: "psu", brand: "EVGA", price: 129.99 },
  { id: 23, name: "Seasonic Focus GX-650", category: "psu", brand: "Seasonic", price: 119.99 },
  { id: 24, name: "Thermaltake Toughpower GF1 750W", category: "psu", brand: "Thermaltake", price: 139.99 },
  { id: 25, name: "Cooler Master MWE Gold 650", category: "psu", brand: "Cooler Master", price: 109.99 },
  { id: 26, name: "SilverStone SX750", category: "psu", brand: "SilverStone", price: 159.99 },
  { id: 27, name: "Be Quiet! Straight Power 11 750W", category: "psu", brand: "Be Quiet!", price: 159.99 },
  { id: 28, name: "Corsair CX550M", category: "psu", brand: "Corsair", price: 79.99 },
  { id: 29, name: "EVGA 500 W1", category: "psu", brand: "EVGA", price: 49.99 },
  { id: 30, name: "Thermaltake Smart Series 600W", category: "psu", brand: "Thermaltake", price: 59.99 },

  // Motherboards
  { id: 31, name: "ASUS ROG Strix Z690-E", category: "motherboard", brand: "ASUS", price: 399.99 },
  { id: 32, name: "MSI MAG B550 TOMAHAWK", category: "motherboard", brand: "MSI", price: 189.99 },
  { id: 33, name: "Gigabyte Z690 AORUS Elite", category: "motherboard", brand: "Gigabyte", price: 229.99 },
  { id: 34, name: "ASRock B550M Steel Legend", category: "motherboard", brand: "ASRock", price: 129.99 },
  { id: 35, name: "MSI MEG Z590 GODLIKE", category: "motherboard", brand: "MSI", price: 799.99 },
  { id: 36, name: "ASUS TUF Gaming X570-Plus", category: "motherboard", brand: "ASUS", price: 189.99 },
  { id: 37, name: "Gigabyte B450M DS3H", category: "motherboard", brand: "Gigabyte", price: 79.99 },
  { id: 38, name: "ASRock X570 Phantom Gaming 4", category: "motherboard", brand: "ASRock", price: 159.99 },
  { id: 39, name: "MSI PRO B550M-VC", category: "motherboard", brand: "MSI", price: 119.99 },
  { id: 40, name: "Gigabyte B650 AORUS PRO AX", category: "motherboard", brand: "Gigabyte", price: 199.99 },

  // RAM
  { id: 41, name: "Corsair Vengeance LPX 16GB DDR4", category: "ram", brand: "Corsair", price: 89.99 },
  { id: 42, name: "G.SKILL Trident Z RGB 32GB DDR4", category: "ram", brand: "G.SKILL", price: 189.99 },
  { id: 43, name: "Kingston Fury Beast 16GB DDR5", category: "ram", brand: "Kingston", price: 139.99 },
  { id: 44, name: "Crucial Ballistix 32GB DDR4", category: "ram", brand: "Crucial", price: 159.99 },
  { id: 45, name: "TeamGroup T-Force Vulcan 16GB DDR5", category: "ram", brand: "TeamGroup", price: 129.99 },
  { id: 46, name: "Corsair Dominator Platinum 64GB DDR4", category: "ram", brand: "Corsair", price: 349.99 },
  { id: 47, name: "ADATA XPG Spectrix D50 16GB DDR4", category: "ram", brand: "ADATA", price: 89.99 },
  { id: 48, name: "HyperX Predator 32GB DDR4", category: "ram", brand: "HyperX", price: 169.99 },
  { id: 49, name: "G.SKILL Ripjaws V 16GB DDR4", category: "ram", brand: "G.SKILL", price: 74.99 },
  { id: 50, name: "Patriot Viper Steel 32GB DDR4", category: "ram", brand: "Patriot", price: 149.99 },

// Chassis
{ id: 51, name: "NZXT H510 Elite", category: "chassis", brand: "NZXT", price: 169.99 },
{ id: 52, name: "Cooler Master MasterBox NR200", category: "chassis", brand: "Cooler Master", price: 99.99 },
{ id: 53, name: "Fractal Design Meshify C", category: "chassis", brand: "Fractal Design", price: 129.99 },
{ id: 54, name: "Lian Li O11 Dynamic", category: "chassis", brand: "Lian Li", price: 149.99 },
{ id: 55, name: "Corsair iCUE 4000X RGB", category: "chassis", brand: "Corsair", price: 129.99 },
{ id: 56, name: "Phanteks Eclipse P400A", category: "chassis", brand: "Phanteks", price: 89.99 },
{ id: 57, name: "Thermaltake Core P3", category: "chassis", brand: "Thermaltake", price: 149.99 },
{ id: 58, name: "Be Quiet! Silent Base 802", category: "chassis", brand: "Be Quiet!", price: 179.99 },
{ id: 59, name: "DeepCool Matrexx 55 V3", category: "chassis", brand: "DeepCool", price: 69.99 },
{ id: 60, name: "Rosewill Prism S500", category: "chassis", brand: "Rosewill", price: 79.99 },

// SSDs
{ id: 61, name: "Samsung 980 PRO 1TB", category: "ssd", brand: "Samsung", price: 169.99 },
{ id: 62, name: "WD Blue SN570 500GB", category: "ssd", brand: "Western Digital", price: 59.99 },
{ id: 63, name: "Crucial P5 Plus 1TB", category: "ssd", brand: "Crucial", price: 119.99 },
{ id: 64, name: "Kingston NV2 1TB", category: "ssd", brand: "Kingston", price: 89.99 },
{ id: 65, name: "Seagate FireCuda 530 2TB", category: "ssd", brand: "Seagate", price: 249.99 },
{ id: 66, name: "Sabrent Rocket 4 Plus 1TB", category: "ssd", brand: "Sabrent", price: 139.99 },
{ id: 67, name: "ADATA XPG SX8200 Pro 1TB", category: "ssd", brand: "ADATA", price: 99.99 },
{ id: 68, name: "Patriot Viper VP4300 2TB", category: "ssd", brand: "Patriot", price: 219.99 },
{ id: 69, name: "Corsair MP600 PRO LPX 1TB", category: "ssd", brand: "Corsair", price: 159.99 },
{ id: 70, name: "TeamGroup MP34 1TB", category: "ssd", brand: "TeamGroup", price: 79.99 },

// HDDs
{ id: 71, name: "Seagate Barracuda 2TB", category: "hdd", brand: "Seagate", price: 69.99 },
{ id: 72, name: "WD Black 4TB", category: "hdd", brand: "Western Digital", price: 139.99 },
{ id: 73, name: "Toshiba X300 5TB", category: "hdd", brand: "Toshiba", price: 149.99 },
{ id: 74, name: "Seagate IronWolf 6TB", category: "hdd", brand: "Seagate", price: 199.99 },
{ id: 75, name: "WD Red Plus 3TB", category: "hdd", brand: "Western Digital", price: 119.99 },
{ id: 76, name: "Toshiba N300 8TB", category: "hdd", brand: "Toshiba", price: 249.99 },
{ id: 77, name: "Seagate Exos X16 10TB", category: "hdd", brand: "Seagate", price: 329.99 },
{ id: 78, name: "WD Elements Desktop 12TB", category: "hdd", brand: "Western Digital", price: 299.99 },
{ id: 79, name: "Seagate Backup Plus 4TB", category: "hdd", brand: "Seagate", price: 109.99 },
{ id: 80, name: "HGST Ultrastar 7K6000 6TB", category: "hdd", brand: "HGST", price: 179.99 },

// Cooling Fans
{ id: 81, name: "Noctua NF-A12x25", category: "cooling", brand: "Noctua", price: 29.99 },
{ id: 82, name: "Corsair iCUE SP120 RGB", category: "cooling", brand: "Corsair", price: 49.99 },
{ id: 83, name: "Cooler Master SickleFlow 120", category: "cooling", brand: "Cooler Master", price: 14.99 },
{ id: 84, name: "Thermaltake Riing Plus 12 RGB", category: "cooling", brand: "Thermaltake", price: 59.99 },
{ id: 85, name: "Be Quiet! Silent Wings 3", category: "cooling", brand: "Be Quiet!", price: 24.99 },
{ id: 86, name: "NZXT Aer RGB 2", category: "cooling", brand: "NZXT", price: 29.99 },
{ id: 87, name: "Phanteks PH-F120MP", category: "cooling", brand: "Phanteks", price: 19.99 },
{ id: 88, name: "ARCTIC F12", category: "cooling", brand: "ARCTIC", price: 9.99 },
{ id: 89, name: "DeepCool CF120", category: "cooling", brand: "DeepCool", price: 34.99 },
{ id: 90, name: "Lian Li UNI FAN SL120", category: "cooling", brand: "Lian Li", price: 79.99 },
// Water Cooling Systems
{ id: 91, name: "Corsair iCUE H100i RGB Pro XT", category: "watercooling", brand: "Corsair", price: 129.99 },
{ id: 92, name: "NZXT Kraken X63", category: "watercooling", brand: "NZXT", price: 149.99 },
{ id: 93, name: "Cooler Master MasterLiquid ML240L", category: "watercooling", brand: "Cooler Master", price: 99.99 },
{ id: 94, name: "EK-AIO 240 D-RGB", category: "watercooling", brand: "EKWB", price: 159.99 },
{ id: 95, name: "Thermaltake Floe DX 360 RGB", category: "watercooling", brand: "Thermaltake", price: 219.99 },
{ id: 96, name: "Arctic Liquid Freezer II 280", category: "watercooling", brand: "ARCTIC", price: 129.99 },
{ id: 97, name: "Lian Li Galahad 360 RGB", category: "watercooling", brand: "Lian Li", price: 179.99 },
{ id: 98, name: "ASUS ROG Ryujin II 360", category: "watercooling", brand: "ASUS", price: 349.99 },
{ id: 99, name: "DeepCool Castle 240EX", category: "watercooling", brand: "DeepCool", price: 139.99 },
{ id: 100, name: "Be Quiet! Pure Loop 280", category: "watercooling", brand: "Be Quiet!", price: 109.99 },

// Peripherals - Keyboards
{ id: 101, name: "Logitech G Pro Mechanical Keyboard", category: "peripherals", subcategory: "keyboards", brand: "Logitech", price: 129.99 },
{ id: 102, name: "Razer Huntsman Elite", category: "peripherals", subcategory: "keyboards", brand: "Razer", price: 199.99 },
{ id: 103, name: "Corsair K70 RGB MK.2", category: "peripherals", subcategory: "keyboards", brand: "Corsair", price: 149.99 },
{ id: 104, name: "SteelSeries Apex Pro", category: "peripherals", subcategory: "keyboards", brand: "SteelSeries", price: 179.99 },
{ id: 105, name: "Keychron K6 Wireless", category: "peripherals", subcategory: "keyboards", brand: "Keychron", price: 99.99 },

// Peripherals - Mice
{ id: 106, name: "Logitech G502 HERO", category: "peripherals", subcategory: "mice", brand: "Logitech", price: 49.99 },
{ id: 107, name: "Razer DeathAdder V2", category: "peripherals", subcategory: "mice", brand: "Razer", price: 69.99 },
{ id: 108, name: "Corsair Dark Core RGB Pro", category: "peripherals", subcategory: "mice", brand: "Corsair", price: 79.99 },
{ id: 109, name: "SteelSeries Rival 600", category: "peripherals", subcategory: "mice", brand: "SteelSeries", price: 89.99 },
{ id: 110, name: "Glorious Model O", category: "peripherals", subcategory: "mice", brand: "Glorious", price: 59.99 },

// Peripherals - Headsets
{ id: 111, name: "Logitech G733 LIGHTSPEED Wireless", category: "peripherals", subcategory: "headsets", brand: "Logitech", price: 129.99 },
{ id: 112, name: "Razer BlackShark V2 Pro", category: "peripherals", subcategory: "headsets", brand: "Razer", price: 179.99 },
{ id: 113, name: "HyperX Cloud II", category: "peripherals", subcategory: "headsets", brand: "HyperX", price: 99.99 },
{ id: 114, name: "SteelSeries Arctis Pro Wireless", category: "peripherals", subcategory: "headsets", brand: "SteelSeries", price: 329.99 },
{ id: 115, name: "Corsair HS80 RGB Wireless", category: "peripherals", subcategory: "headsets", brand: "Corsair", price: 149.99 },

// Peripherals - Headset Stands
{ id: 116, name: "Razer Base Station V2 Chroma", category: "peripherals", subcategory: "headset_stands", brand: "Razer", price: 69.99 },
{ id: 117, name: "Corsair ST100 RGB", category: "peripherals", subcategory: "headset_stands", brand: "Corsair", price: 79.99 },
{ id: 118, name: "Cooler Master GS750", category: "peripherals", subcategory: "headset_stands", brand: "Cooler Master", price: 99.99 },
{ id: 119, name: "Logitech G-Series Stand", category: "peripherals", subcategory: "headset_stands", brand: "Logitech", price: 49.99 },
{ id: 120, name: "HyperX ChargePlay Base", category: "peripherals", subcategory: "headset_stands", brand: "HyperX", price: 59.99 },

// Peripherals - Mousepads & Deskpads
{ id: 121, name: "Logitech G840 XL Gaming Mousepad", category: "peripherals", subcategory: "mousepads", brand: "Logitech", price: 49.99 },
{ id: 122, name: "Razer Goliathus Extended Chroma", category: "peripherals", subcategory: "mousepads", brand: "Razer", price: 59.99 },
{ id: 123, name: "Corsair MM700 RGB Extended", category: "peripherals", subcategory: "mousepads", brand: "Corsair", price: 79.99 },
{ id: 124, name: "SteelSeries QcK Prism XL", category: "peripherals", subcategory: "mousepads", brand: "SteelSeries", price: 69.99 },
{ id: 125, name: "Glorious XL Heavy", category: "peripherals", subcategory: "mousepads", brand: "Glorious", price: 29.99 },

// Peripherals - Speakers
{ id: 126, name: "Logitech Z623 2.1 Speaker System", category: "peripherals", subcategory: "speakers", brand: "Logitech", price: 139.99 },
{ id: 127, name: "Razer Nommo Chroma", category: "peripherals", subcategory: "speakers", brand: "Razer", price: 149.99 },
{ id: 128, name: "Creative Pebble V3", category: "peripherals", subcategory: "speakers", brand: "Creative", price: 39.99 },
{ id: 129, name: "Audioengine A5+ Wireless", category: "peripherals", subcategory: "speakers", brand: "Audioengine", price: 499.99 },
{ id: 130, name: "Edifier R1280T Powered Bookshelf Speakers", category: "peripherals", subcategory: "speakers", brand: "Edifier", price: 99.99 },

// Peripherals - Printers
{ id: 131, name: "HP Envy 6055 Wireless Printer", category: "peripherals", subcategory: "printers", brand: "HP", price: 129.99 },
{ id: 132, name: "Canon PIXMA TS6420", category: "peripherals", subcategory: "printers", brand: "Canon", price: 119.99 },
{ id: 133, name: "Epson EcoTank ET-2760", category: "peripherals", subcategory: "printers", brand: "Epson", price: 299.99 },
{ id: 134, name: "Brother HL-L2350DW", category: "peripherals", subcategory: "printers", brand: "Brother", price: 199.99 },
{ id: 135, name: "Xerox B230/DNI", category: "peripherals", subcategory: "printers", brand: "Xerox", price: 249.99 },

// Peripherals - Monitors
{ id: 136, name: "Dell UltraSharp U2723QE 27-inch", category: "peripherals", subcategory: "monitors", brand: "Dell", price: 699.99 },
{ id: 137, name: "ASUS ROG Swift PG279QZ 27-inch", category: "peripherals", subcategory: "monitors", brand: "ASUS", price: 749.99 },
{ id: 138, name: "LG 27GN950-B 4K UHD", category: "peripherals", subcategory: "monitors", brand: "LG", price: 899.99 },
{ id: 139, name: "Samsung Odyssey G7 32-inch", category: "peripherals", subcategory: "monitors", brand: "Samsung", price: 749.99 },
{ id: 140, name: "Acer Predator XB273U", category: "peripherals", subcategory: "monitors", brand: "Acer", price: 679.99 }
];

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    // Group products by category and subcategory
    const categorizedProducts = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = {};
        }
        if (product.subcategory) {
            if (!acc[product.category][product.subcategory]) {
                acc[product.category][product.subcategory] = [];
            }
            acc[product.category][product.subcategory].push(product);
        } else {
            if (!acc[product.category].general) {
                acc[product.category].general = [];
            }
            acc[product.category].general.push(product);
        }
        return acc;
    }, {});

    // Render the products grouped by category and subcategory
    res.render('index', { categorizedProducts });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}