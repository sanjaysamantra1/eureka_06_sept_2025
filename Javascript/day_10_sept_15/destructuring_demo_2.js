const laptopObj = {
    brand: "HP",
    model: "Spectre x360",
    specifications: {
        processor: {
            type: "Intel Core i7",
            generation: "13th Gen",
            cores: 12,
        },
        memory: "16GB DDR5 RAM",
        storage: {
            type: "SSD",
            capacity: "1TB NVMe",
        },
        graphics: "Intel Iris Xe Graphics",
        display: {
            size: "13.5 inches",
            resolution: "3K2K OLED",
            touchscreen: true,
        },
    },
    features: {
        ports: ["USB-C Thunderbolt 4", "USB-A", "HDMI"],
        webcam: {
            resolution: "5MP",
            privacyShutter: true,
        },
        audio: {
            speakers: "Bang & Olufsen",
            microphone: "Dual Array Digital",
        },
    },
    owner: {
        name: "Jane Doe",
        contact: {
            email: "jane.doe@example.com",
            phone: "555-123-4567",
        },
    },
};
function displayLaptopConfig(laptop) {
    console.log(laptop.specifications.processor.type); // Output: Intel Core i7
    console.log(laptop.specifications.processor.generation); //  13th
    console.log(laptop.specifications.processor.cores); // 
}
displayLaptopConfig(laptopObj)
// Write a function which prints laptop brand, processor and other info

function displayLaptopInfo(laptopObj) {
    const { specifications: { processor: { type, generation, cores } } } = laptopObj;
    console.log(type); // Output: Intel Core i7
    console.log(generation); //  13th
    console.log(cores);
}
displayLaptopInfo(laptopObj)

// Object De-structuring