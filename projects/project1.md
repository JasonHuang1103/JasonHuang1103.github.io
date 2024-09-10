# Project 1: Images of the Russian Empire - Colorizing the Prokudin-Gorskii Photo Collection

## Overview
The goal of this assignment is to take the digitized Prokudin-Gorskii glass plate images and, using image processing techniques, automatically produce a color image with as few visual artifacts as possible. In order to do this, I extracted the three color channel images, place them on top of each other, and align them so that they form a single RGB color image.

## Approach
For the low resolution image, I initially computed the alignment with brute force, calculating the score between the base channel and Offset channel with normalized cross correlation, but the result isn't quite promising. The issue is resolved after I removed a percentage (default to 10%) of the border to prevent aligning the edges of the images.
<div class="image-container" style="display: flex; justify-content: space-around;">
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
<div class="image-container" style="display: flex; justify-content: space-around;">
  <figure>
    <img src="../images/examples/emir_off.jpg" alt="emir_off.jpg" style="width: 100%;">
    <figcaption>without sobel edge detection</figcaption>
  </figure>
  <figure>
    <img src="../images/examples/emir_perfect.jpg" alt="emir_perfect.jpg" style="width: 100%;">
    <figcaption>with sobel edge detection</figcaption>
  </figure>
</div>

## Image Gallery
<body>
<link rel="stylesheet" href="style.css">
<div class="slider-container">
    <button class="prev" onclick="moveSlides(-1)">&#10094;</button>
    <div class="slider-wrapper">
        <div class="slider">
            <div class="slide"><img src="../images/cathedral_color.jpg" alt="Image 1">
                <div class="caption">Cathedral</div>
                <div class="caption">(Offset: G=[5, 2], R=[12, 3])</div>
            </div>
            <div class="slide"><img src="../images/church_color.jpg" alt="Image 2">
                <div class="caption">Church</div>
                <div class="caption">(Offset: G=[25, 4], R=[58, -4])</div>
            </div>
            <div class="slide"><img src="../images/emir_color.jpg" alt="Image 3">
                <div class="caption">Emir</div>
                <div class="caption">(Offset: G=[49, 24], R=[107, 40])</div>
            </div>
            <div class="slide"><img src="../images/harvesters_color.jpg" alt="Image 4">
                <div class="caption">Harvesters</div>
                <div class="caption">(Offset: G=[60, 18], R=[124, 11])</div>
            </div>
            <div class="slide"><img src="../images/icon_color.jpg" alt="Image 5">
                <div class="caption">Icon</div>
                <div class="caption">(Offset: G=[40, 16], R=[89, 23])</div>
            </div>
            <div class="slide"><img src="../images/lady_color.jpg" alt="Image 6">
                <div class="caption">Lady</div>
                <div class="caption">(Offset: G=[57, 9], R=[120, 13])</div>
            </div>
            <div class="slide"><img src="../images/melons_color.jpg" alt="Image 7">
                <div class="caption">Melons</div>
                <div class="caption">(Offset: G=[80, 10], R=[124, 15])</div>
            </div>
            <div class="slide"><img src="../images/monastery_color.jpg" alt="Image 8">
                <div class="caption">Monastery</div>
                <div class="caption">(Offset: G=[-3, 2], R=[3, 2])</div>
            </div>
            <div class="slide"><img src="../images/onion_church_color.jpg" alt="Image 9">
                <div class="caption">Onion Church</div>
                <div class="caption">(Offset: G=[52, 26], R=[108, 35])</div>
            </div>
            <div class="slide"><img src="../images/sculpture_color.jpg" alt="Image 10">
                <div class="caption">Sculpture</div>
                <div class="caption">(Offset: G=[33, -10], R=[124, -25])</div>
            </div>
            <div class="slide"><img src="../images/self_portrait_color.jpg" alt="Image 11">
                <div class="caption">Self Portrait</div>
                <div class="caption">(Offset: G=[80, 30], R=[124, 39])</div>
            </div>
            <div class="slide"><img src="../images/three_generations_color.jpg" alt="Image 12">
                <div class="caption">Three Generations</div>
                <div class="caption">(Offset: G=[54, 12], R=[110, 8])</div>
            </div>
            <div class="slide"><img src="../images/tobolsk_color.jpg" alt="Image 13">
                <div class="caption">Tobolsk</div>
                <div class="caption">(Offset: G=[3, 3], R=[6, 3])</div>
            </div>
            <div class="slide"><img src="../images/train_color.jpg" alt="Image 14">
                <div class="caption">Train</div>
                <div class="caption">(Offset: G=[42, 9], R=[90, 33])</div>
            </div>
        </div>
    </div>
    <button class="next" onclick="moveSlides(1)">&#10095;</button>
</div>
<script src="script.js"></script>
</body>