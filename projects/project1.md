# Project 1: Images of the Russian Empire - Colorizing the Prokudin-Gorskii Photo Collection

## Overview
The goal of this assignment is to take the digitized Prokudin-Gorskii glass plate images and, using image processing techniques, automatically produce a color image with as few visual artifacts as possible. In order to do this, I extracted the three color channel images, place them on top of each other, and align them so that they form a single RGB color image.

## Approach
For the low resolution image, I initially computed the alignment with brute force, calculating the score between the base channel and displacement channel with normalized cross correlation, but the result isn't quite promising. The issue is resolved after I removed a percentage (default to 10%) of the border to prevent aligning the edges of the images.
<div style="display: flex; justify-content: space-around;">
  <figure>
    <img src="../images/examples/cathedral_off.jpg" alt="cathedral_off.jpg" style="width: 100%;">
    <figcaption>without border crop</figcaption>
  </figure>
  <figure>
    <img src="../images/examples/cathedral_perfect.jpg" alt="cathedral_perfect.jpg" style="width: 100%;">
    <figcaption>with border crop</figcaption>
  </figure>
</div>

For the high resolution image, I utilized image pyramid, where the image is downscaled to a certain level and applying the alignment process from the most-coarse level. By default, I set the scaling factor to 2 and levels to 5. This works reasonably well for most of the high resolution image, except for a few such as the image with label "emir". This in turn was resolved by utilizing sobel edge detection, which computes the gradient of the image intensity at each pixel, emphasizing regions where the intensity changes sharply.
<div style="display: flex; justify-content: space-around;">
  <figure>
    <img src="../images/examples/emir_off.jpg" alt="emir_off.jpg" style="width: 100%;">
    <figcaption>without sobel edge detection</figcaption>
  </figure>
  <figure>
    <img src="../images/examples/emir_perfect.jpg" alt="emir_perfect.jpg" style="width: 100%;">
    <figcaption>with sobel edge detection</figcaption>
  </figure>
</div>

The full list of images are as follow:
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Gallery Slider</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="slider-container">
    <button class="prev" onclick="moveSlides(-1)">&#10094;</button>
    <div class="slider-wrapper">
        <div class="slider">
            <div class="slide"><img src="../images/cathedral_color.jpg" alt="Image 1"></div>
            <div class="slide"><img src="../images/church_color.jpg" alt="Image 2"></div>
            <div class="slide"><img src="../images/emir_color.jpg" alt="Image 3"></div>
            <div class="slide"><img src="../images/harvesters_color.jpg" alt="Image 4"></div>
            <div class="slide"><img src="../images/icon_color.jpg" alt="Image 5"></div>
            <div class="slide"><img src="../images/icon_color.jpg" alt="Image 5"></div>
            <div class="slide"><img src="../images/lady_color.jpg" alt="Image 6"></div>
            <div class="slide"><img src="../images/melons_color.jpg" alt="Image 7"></div>
            <div class="slide"><img src="../images/monastery_color.jpg" alt="Image 8"></div>
            <div class="slide"><img src="../images/onion_church_color.jpg" alt="Image 9"></div>
            <div class="slide"><img src="../images/sculpture_color.jpg" alt="Image 10"></div>
            <div class="slide"><img src="../images/self_portrait_color.jpg" alt="Image 11"></div>
            <div class="slide"><img src="../images/three_generations_color.jpg" alt="Image 12"></div>
            <div class="slide"><img src="../images/tobolsk_color.jpg" alt="Image 13"></div>
            <div class="slide"><img src="../images/train_color.jpg" alt="Image 14"></div>
            <!-- Add more slides as needed -->
        </div>
    </div>
    <button class="next" onclick="moveSlides(1)">&#10095;</button>
</div>
<script src="script.js"></script>
</body>
</html>