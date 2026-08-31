const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'generate_slider_sections.cjs');
let scriptContent = fs.readFileSync(scriptPath, 'utf8');

// 1. slider-hero
scriptContent = scriptContent.replace(
    /<img src="https:\/\/images\.unsplash\.com\/photo-1516321497487-e288fb19713f[^"]*" class="d-block w-100" alt="Slide 1" data-sl-edit="image" data-sl-label="Slide 1 Image" \/>/g,
    '<img src="{{image1}}" class="d-block w-100" alt="Slide 1" data-sl-edit="image" data-sl-label="Slide 1 Image" />'
);
scriptContent = scriptContent.replace(
    /<img src="https:\/\/images\.unsplash\.com\/photo-1522202176988-66273c2fd55f[^"]*" class="d-block w-100" alt="Slide 2" data-sl-edit="image" data-sl-label="Slide 2 Image" \/>/g,
    '<img src="{{image2}}" class="d-block w-100" alt="Slide 2" data-sl-edit="image" data-sl-label="Slide 2 Image" />'
);
scriptContent = scriptContent.replace(
    /<img src="https:\/\/images\.unsplash\.com\/photo-1531482615713-2afd69097998[^"]*" class="d-block w-100" alt="Slide 3" data-sl-edit="image" data-sl-label="Slide 3 Image" \/>/g,
    '<img src="{{image3}}" class="d-block w-100" alt="Slide 3" data-sl-edit="image" data-sl-label="Slide 3 Image" />'
);

// 2. slider-split
scriptContent = scriptContent.replace(
    /<img src="https:\/\/images\.unsplash\.com\/photo-1551288049-bebda4e38f71[^"]*" alt="Slide 1" data-sl-edit="image" data-sl-label="Slide 1 Image" \/>/g,
    '<img src="{{image1}}" alt="Slide 1" data-sl-edit="image" data-sl-label="Slide 1 Image" />'
);
scriptContent = scriptContent.replace(
    /<img src="https:\/\/images\.unsplash\.com\/photo-1561070791-2526d30994b5[^"]*" alt="Slide 2" data-sl-edit="image" data-sl-label="Slide 2 Image" \/>/g,
    '<img src="{{image2}}" alt="Slide 2" data-sl-edit="image" data-sl-label="Slide 2 Image" />'
);

// 3. slider-glass
scriptContent = scriptContent.replace(
    /<img src="https:\/\/images\.unsplash\.com\/photo-1542744094-3a31f272c490[^"]*" alt="Slide 1" data-sl-edit="image" data-sl-label="Slide 1 Image" \/>/g,
    '<img src="{{image1}}" alt="Slide 1" data-sl-edit="image" data-sl-label="Slide 1 Image" />'
);
scriptContent = scriptContent.replace(
    /<img src="https:\/\/images\.unsplash\.com\/photo-1497366216548-37526070297c[^"]*" alt="Slide 2" data-sl-edit="image" data-sl-label="Slide 2 Image" \/>/g,
    '<img src="{{image2}}" alt="Slide 2" data-sl-edit="image" data-sl-label="Slide 2 Image" />'
);

// 4. slider-carousel
scriptContent = scriptContent.replace(
    /<img src="https:\/\/images\.unsplash\.com\/photo-1517245386807-bb43f82c33c4[^"]*" alt="Program 1" data-sl-edit="image" \/>/g,
    '<img src="{{image1}}" alt="Program 1" data-sl-edit="image" />'
);
scriptContent = scriptContent.replace(
    /<img src="https:\/\/images\.unsplash\.com\/photo-1551288049-bebda4e38f71[^"]*" alt="Program 2" data-sl-edit="image" \/>/g,
    '<img src="{{image2}}" alt="Program 2" data-sl-edit="image" />'
);
scriptContent = scriptContent.replace(
    /<img src="https:\/\/images\.unsplash\.com\/photo-1561070791-2526d30994b5[^"]*" alt="Program 3" data-sl-edit="image" \/>/g,
    '<img src="{{image3}}" alt="Program 3" data-sl-edit="image" />'
);
scriptContent = scriptContent.replace(
    /<img src="https:\/\/images\.unsplash\.com\/photo-1522202176988-66273c2fd55f[^"]*" alt="Program 4" data-sl-edit="image" \/>/g,
    '<img src="{{image4}}" alt="Program 4" data-sl-edit="image" />'
);

// 5. slider-twocol
scriptContent = scriptContent.replace(
    /<img src="https:\/\/images\.unsplash\.com\/photo-1541339907198-e08756dedf3f[^"]*" class="d-block w-100" alt="Facility 1" data-sl-edit="image" \/>/g,
    '<img src="{{image1}}" class="d-block w-100" alt="Facility 1" data-sl-edit="image" />'
);
scriptContent = scriptContent.replace(
    /<img src="https:\/\/images\.unsplash\.com\/photo-1523240795612-9a054b0db644[^"]*" class="d-block w-100" alt="Facility 2" data-sl-edit="image" \/>/g,
    '<img src="{{image2}}" class="d-block w-100" alt="Facility 2" data-sl-edit="image" />'
);
scriptContent = scriptContent.replace(
    /<img src="https:\/\/images\.unsplash\.com\/photo-1519389950473-47ba0277781c[^"]*" class="d-block w-100" alt="Facility 3" data-sl-edit="image" \/>/g,
    '<img src="{{image3}}" class="d-block w-100" alt="Facility 3" data-sl-edit="image" />'
);

fs.writeFileSync(scriptPath, scriptContent);
console.log("Updated slider templates with {{image1}}, {{image2}}, etc.");
