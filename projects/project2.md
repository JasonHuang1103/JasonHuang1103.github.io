# Project 2: Fun with Filters and Frequencies

## Overview
This project consist of two parts: The first part consist of experiments with two different filtering approach (Finite Difference Operator and Derivative of Gaussian Filter). The second part consist of a series of image transformation techniques through manipulating the frequencies of different images.





## Part 1: Fun with Filters


### Part 1.1: Finite Difference Operator


<div class="image-container" style="display: flex; justify-content: space-around;">
  <figure>
    <img src="../images/project2_images/result/part_1.1.jpg" style="width: 100%;">
  </figure>
</div>

### Part 1.2: Derivative of Gaussian (DoG) Filter
<div class="image-container" style="display: flex; justify-content: space-around;">
  <figure>
    <img src="../images/project2_images/result/part_1.2.jpg" style="width: 100%;">
  </figure>
</div>



## Part 2: Fun with Frequencies!


### Part 2.1: Image "Sharpening"
<div class="image-container" style="display: flex; justify-content: space-around;">
  <figure>
    <img src="../images/project2_images/result/part_2.1.1_taj.jpg" style="width: 100%;">
  <figcaption>taj</figcaption>
  </figure>
</div>

<div class="image-container" style="display: flex; justify-content: space-around;">
  <figure>
    <img src="../images/project2_images/result/part_2.1.2_bars.jpg" style="width: 100%;">
  <figcaption>bars (blurry image)</figcaption>
  </figure>
</div>

<div class="image-container" style="display: flex; justify-content: space-around;">
  <figure>
    <img src="../images/project2_images/result/part_2.1.3_flower.jpg" style="width: 100%;">
  <figcaption>flower (sharp image)</figcaption>
  </figure>
</div>

<div class="image-container" style="display: flex; justify-content: space-around;">
  <figure>
    <img src="../images/project2_images/result/part_2.1.4_flower_extra.jpg" style="width: 100%;">
  </figure>
</div>


### Part 2.2: Hybrid Images
<div class="image-container" style="display: flex; justify-content: space-around;">
  <figure style="display: flex; justify-content: space-around; align-items: center; width: 100%;">
    <div style="text-align: center; padding: 0 10px; flex-basis: 33.33%; max-width: 33.33%; height: 33vw;">
      <img src="../images/project2_images/data/statue_1.jpg" style="width: 100%; height: 100%; object-fit: contain;">
      <figcaption>Statue 1</figcaption>
    </div>
    <div style="text-align: center; padding: 0 10px; flex-basis: 33.33%; max-width: 33.33%; height: 33vw;">
      <img src="../images/project2_images/data/statue_2.jpg" style="width: 100%; height: 100%; object-fit: contain;">
      <figcaption>Statue 2</figcaption>
    </div>
    <div style="text-align: center; padding: 0 10px; flex-basis: 33.33%; max-width: 33.33%; height: 33vw;">
      <img src="../images/project2_images/result/part_2.2.1_statue.jpg" style="width: 100%; height: 100%; object-fit: contain;">
      <figcaption>Hybrid Statue</figcaption>
    </div>
  </figure>
</div>

<div class="image-container" style="display: flex; justify-content: space-around;">
  <figure style="display: flex; justify-content: space-around; align-items: center; width: 100%;">
    <div style="text-align: center; padding: 0 10px; flex-basis: 33.33%; max-width: 33.33%; height: 33vw;">
      <img src="../images/project2_images/data/beach_1.jpg" style="width: 100%; height: 100%; object-fit: contain;">
      <figcaption>Beach 1</figcaption>
    </div>
    <div style="text-align: center; padding: 0 10px; flex-basis: 33.33%; max-width: 33.33%; height: 33vw;">
      <img src="../images/project2_images/data/beach_2.jpg" style="width: 100%; height: 100%; object-fit: contain;">
      <figcaption>Beach 2</figcaption>
    </div>
    <div style="text-align: center; padding: 0 10px; flex-basis: 33.33%; max-width: 33.33%; height: 33vw;">
      <img src="../images/project2_images/result/part_2.2.2_beach.jpg" style="width: 100%; height: 100%; object-fit: contain;">
      <figcaption>Hybrid Beach</figcaption>
    </div>
  </figure>
</div>

Fourier Transform Analysis
<div class="image-container" style="display: flex; justify-content: space-around;">
  <figure style="display: flex; justify-content: space-around; align-items: center; width: 100%;">
    <div style="text-align: center; padding: 0 10px; flex-basis: 40%; max-width: 40%; height: 40vw;">
      <img src="../images/project2_images/result/part_2.2.3_ft_beach_1.jpg" style="width: 100%; height: 100%; object-fit: contain;">
      <figcaption>Beach 1 (unfiltered)</figcaption>
    </div>
    <div style="text-align: center; padding: 0 10px; flex-basis: 40%; max-width: 40%; height: 40vw;">
      <img src="../images/project2_images/result/part_2.2.4_ft_beach_2.jpg" style="width: 100%; height: 100%; object-fit: contain;">
      <figcaption>Beach 2 (unfiltered)</figcaption>
    </div>
  </figure>
</div>

<div class="image-container" style="display: flex; justify-content: space-around;">
  <figure style="display: flex; justify-content: space-around; align-items: center; width: 100%;">
    <div style="text-align: center; padding: 0 10px; flex-basis: 40%; max-width: 40%; height: 40vw;">
      <img src="../images/project2_images/result/part_2.2.5_ft_low_freq_beach_1.jpg" style="width: 100%; height: 100%; object-fit: contain;">
      <figcaption>Beach 1 (low frequency)</figcaption>
    </div>
    <div style="text-align: center; padding: 0 10px; flex-basis: 40%; max-width: 40%; height: 40vw;">
      <img src="../images/project2_images/result/part_2.2.6_ft_high_freq_beach_2.jpg" style="width: 100%; height: 100%; object-fit: contain;">
      <figcaption>Beach 2 (high frequency)</figcaption>
    </div>
  </figure>
</div>

<div class="image-container" style="display: flex; justify-content: space-around;">
  <figure style="display: flex; justify-content: space-around; align-items: center; width: 100%;">
    <div style="text-align: center; padding: 0 10px; flex-basis: 60%; max-width: 60%; height: 60vw;">
      <img src="../images/project2_images/result/part_2.2.7_ft_hybrid.jpg" style="width: 100%; height: 100%; object-fit: contain;">
      <figcaption>Hybrid Beach</figcaption>
    </div>
  </figure>
</div>


### Part 2.3: Gaussian and Laplacian Stacks
The first row displays the gaussian stacks, and the second row displays the laplacian stacks, both from level 0 to 4.
<div class="image-container" style="display: flex; flex-direction: column; align-items: center; width: 100%;">
  <figure style="width: 100%;">
    <div style="text-align: center; padding: 0px; width: 100%; height: 100vw;">
      <img src="../images/project2_images/result/part_2.3.1_apple.jpg" style="width: 100%; height: 100%; object-fit: contain;">
    </div>
    <div style="text-align: center; padding: 0px; width: 100%; height: 100vw;">
      <img src="../images/project2_images/result/part_2.3.2_orange.jpg" style="width: 100%; height: 100%; object-fit: contain;">
    </div>
  </figure>
</div>


### Part 2.4: Multiresolution Blending
<div class="image-container" style="display: flex; justify-content: space-around;">
  <figure style="display: flex; justify-content: space-around; align-items: center; width: 100%;">
    <div style="text-align: center; padding: 0 10px; flex-basis: 33.33%; max-width: 33.33%; height: 33vw;">
      <img src="../images/project2_images/data/apple.jpg" style="width: 100%; height: 100%; object-fit: contain;">
      <figcaption>Apple</figcaption>
    </div>
    <div style="text-align: center; padding: 0 10px; flex-basis: 33.33%; max-width: 33.33%; height: 33vw;">
      <img src="../images/project2_images/data/orange.jpg" style="width: 100%; height: 100%; object-fit: contain;">
      <figcaption>Orange</figcaption>
    </div>
    <div style="text-align: center; padding: 0 10px; flex-basis: 33.33%; max-width: 33.33%; height: 33vw;">
      <img src="../images/project2_images/result/part_2.4.1_oraple_mask.jpg" style="width: 100%; height: 100%; object-fit: contain;">
      <figcaption>Mask</figcaption>
    </div>
  </figure>
</div>
<div class="image-container" style="display: flex; justify-content: space-around;">
  <figure style="display: flex; justify-content: space-around; align-items: center; width: 100%;">
    <div style="text-align: center; padding: 10 0px; flex-basis: 60%; max-width: 60%; height: 60vw;">
      <img src="../images/project2_images/result/part_2.4.2_oraple.jpg" style="width: 100%; height: 100%; object-fit: contain;">
      <figcaption>Oraple</figcaption>
    </div>
  </figure>
</div>

<div class="image-container" style="display: flex; justify-content: space-around;">
  <figure style="display: flex; justify-content: space-around; align-items: center; width: 100%;">
    <div style="text-align: center; padding: 0 10px; flex-basis: 33.33%; max-width: 33.33%; height: 33vw;">
      <img src="../images/project2_images/data/fo.jpg" style="width: 100%; height: 100%; object-fit: contain;">
      <figcaption>Image 1</figcaption>
    </div>
    <div style="text-align: center; padding: 0 10px; flex-basis: 33.33%; max-width: 33.33%; height: 33vw;">
      <img src="../images/project2_images/data/mo.jpg" style="width: 100%; height: 100%; object-fit: contain;">
      <figcaption>Image 2</figcaption>
    </div>
    <div style="text-align: center; padding: 0 10px; flex-basis: 33.33%; max-width: 33.33%; height: 33vw;">
      <img src="../images/project2_images/result/part_2.4.3_fomo_mask.jpg" style="width: 100%; height: 100%; object-fit: contain;">
      <figcaption>Mask</figcaption>
    </div>
  </figure>
</div>
<div class="image-container" style="display: flex; justify-content: space-around;">
  <figure style="display: flex; justify-content: space-around; align-items: center; width: 100%;">
    <div style="text-align: center; padding: 10 0px; flex-basis: 40%; max-width: 40%; height: 60vw;">
      <img src="../images/project2_images/result/part_2.4.4_fomo.jpg" style="width: 100%; height: 100%; object-fit: contain;">
    </div>
  </figure>
</div>

<div class="image-container" style="display: flex; justify-content: space-around;">
  <figure style="display: flex; justify-content: space-around; align-items: center; width: 100%;">
    <div style="text-align: center; padding: 0 10px; flex-basis: 33.33%; max-width: 33.33%; height: 33vw;">
      <img src="../images/project2_images/data/cat.jpg" style="width: 100%; height: 100%; object-fit: contain;">
      <figcaption>Cat</figcaption>
    </div>
    <div style="text-align: center; padding: 0 10px; flex-basis: 33.33%; max-width: 33.33%; height: 33vw;">
      <img src="../images/project2_images/data/box.jpg" style="width: 100%; height: 100%; object-fit: contain;">
      <figcaption>Box</figcaption>
    </div>
    <div style="text-align: center; padding: 0 10px; flex-basis: 33.33%; max-width: 33.33%; height: 33vw;">
      <img src="../images/project2_images/result/part_2.4.5_cat_mask.jpg" style="width: 100%; height: 100%; object-fit: contain;">
      <figcaption>Mask</figcaption>
    </div>
  </figure>
</div>
<div class="image-container" style="display: flex; justify-content: space-around;">
  <figure style="display: flex; justify-content: space-around; align-items: center; width: 100%;">
    <div style="text-align: center; padding: 10 0px; flex-basis: 60%; max-width: 60%; height: 60vw;">
      <img src="../images/project2_images/result/part_2.4.6_cat_drumstick.jpg" style="width: 100%; height: 100%; object-fit: contain;">
      <figcaption>Cat drumstick</figcaption>
    </div>
  </figure>
</div>



<link rel="stylesheet" href="style.css">
<script src="script.js"></script>