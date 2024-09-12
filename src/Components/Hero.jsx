import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-start p-[1.5rem] bg-transparent gap-[var(--custom-gap)] sm:flex-row sm:items-center sm:p-[var(--custom-padding)] sm:pt-0'>
      <div className='flex flex-col gap-[2rem] sm:w-[50vw] '>
        <h1 className='text-[2.5rem] font-bold leading-[3rem]'>Unlock the World of <br/>Communication</h1>
        <p className='text-[28px] font-semibold'>Record | Watch | Translate</p>
        <p className='text-[var(--sub-headline-color)] font-normal text-[1.25rem]'>Discover our innovative platform that transforms sign language into text and text into sign language, fostering seamless communication for everyone. Join us in making interactions more inclusive and accessible.</p>
        <button tabIndex={0} className='text-[1.25rem] bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[var(--button-radius)] text-[var(--tertiary-color)] font-medium sm:w-[max-content] shadow-[var(--button-shadow)]'>Get Started</button>
      </div>
      <svg className='w-[100%] sm:w-[50%]' viewBox="0 0 624 532" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label='hero image, a male and a female communicating with sign language'>
<g clip-path="url(#clip0_111_378)">
<path d="M535.369 455.601C535.369 455.601 616.97 337.433 596.879 200.05C576.788 62.6681 459.481 71.0441 380.453 47.4749C301.424 23.9056 260.451 -17.851 167.636 8.34117C74.8222 34.5334 39.3137 82.8968 29.3238 157.811C19.334 232.726 25.4664 304.485 38.2504 372.323C51.0345 440.16 74.6862 490.07 142.81 497.023C210.934 503.977 234.202 483.995 272.814 504.694C311.426 525.393 463.166 551.808 535.369 455.601Z" fill="#F2F2F2"/>
<path opacity="0.22" d="M311.179 532C452.101 532 566.34 523.182 566.34 512.303C566.34 501.425 452.101 492.607 311.179 492.607C170.257 492.607 56.0168 501.425 56.0168 512.303C56.0168 523.182 170.257 532 311.179 532Z" fill="#2F2E41"/>
<path d="M42.1561 317.154L38.5459 306.712C37.0571 303.881 35.3106 301.193 33.3285 298.683C30.1139 294.662 20.4826 256.505 20.4826 256.505C20.4826 256.505 4.42216 241.263 0.811966 234.804C-2.79823 228.346 6.42508 220.749 12.8542 227.171C19.2833 233.592 29.7059 246.459 29.7059 246.459C29.7059 246.459 32.9205 240.025 36.5307 239.629C38.5295 239.373 40.5529 239.373 42.5518 239.629C43.6827 238.239 45.085 237.095 46.6729 236.265C48.2609 235.435 50.0011 234.938 51.7874 234.804C57.8086 234.408 60.6275 234.408 60.6275 234.408C60.6275 234.408 68.2559 228.779 72.2617 231.587C76.2675 234.396 75.8719 234.408 81.1017 242.846C86.3316 251.284 86.3192 256.901 86.3192 256.901C86.3192 256.901 102.775 237.217 108.388 236.017C114.002 234.817 123.225 234 121.234 238.825C119.244 243.65 110.404 251.68 106.793 260.118C103.183 268.556 96.3462 278.59 91.1287 285.024C85.9112 291.457 81.4974 296.27 81.4974 297.47C81.4974 298.67 79.8901 312.738 79.8901 312.738" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M29.7056 246.459C29.8542 254.583 32.837 262.4 38.1376 268.556C46.9776 278.59 49.3762 276.19 54.2104 273.777" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M42.5515 239.629C42.5515 239.629 48.5726 258.51 51.3916 266.143C54.2105 273.777 58.6119 272.973 63.4338 272.565C68.2556 272.156 68.6513 269.719 68.6513 269.719" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M60.6272 234.408C60.6272 234.408 61.0228 258.906 62.6301 261.726C64.2374 264.547 71.0621 272.973 75.068 269.36C79.0738 265.747 77.0833 243.242 77.0833 243.242" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M58.6121 276.19C58.6121 276.19 55.0019 285.419 56.1394 290.245C57.2769 295.07 65.3751 299.883 73.0035 299.883" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M81.4973 259.71L86.3191 256.901" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M29.3101 250.072L22.4854 252.076" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M111.64 86.6704C111.64 86.6704 83.9333 80.2492 77.9121 81.4493C71.891 82.6494 24.5505 103.93 23.7468 107.159C22.9432 110.388 12.9039 157.774 10.493 162.599C8.08204 167.425 12.9657 168.625 16.9221 167.425C20.8785 166.224 24.1425 164.208 24.9461 154.966C25.7497 145.724 36.9883 125.643 36.9883 125.643L50.2422 122.018C50.2422 122.018 43.0218 139.698 42.2182 150.14C41.4145 160.583 47.8313 167.821 51.8495 164.987C55.8677 162.154 59.8735 142.89 59.8735 142.89C59.8735 142.89 71.5201 130.431 77.1827 126.014C82.8452 121.597 86.8264 112.764 86.8264 112.764L105.236 123.231" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M28.9641 142.915C28.9641 142.915 33.7859 149.745 43.0216 143.719" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M43.8129 125.235C44.1622 129.072 43.1703 132.911 41.0063 136.098" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M86.7766 112.788L90.7824 104.746" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M18.8384 467.045C18.8384 467.045 19.642 462.208 19.914 460.859C20.186 459.511 20.458 442.857 21.7933 431.302C23.1286 419.746 29.0508 396.102 29.3104 391.537C29.5701 386.972 35.4923 385.091 38.1752 382.666C40.8581 380.241 58.3156 363.316 58.3156 363.316C59.5316 362.522 60.9007 361.993 62.3341 361.763C63.7675 361.533 65.2333 361.606 66.6364 361.98C71.1986 363.316 86.5048 372.731 88.6561 374.352C90.8074 375.973 94.838 389.124 94.838 389.124C94.838 389.124 103.493 388.32 102.627 392.898C101.762 397.476 98.0525 410.095 97.2489 412.236C96.4452 414.376 78.7033 429.433 77.9121 430.51C77.1208 431.586 66.1047 446.903 60.1949 449.068C57.525 449.953 54.9219 451.028 52.4058 452.285L51.0581 467.318" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M86.245 396.647C82.8523 395.701 79.7852 393.839 77.3802 391.265C73.3497 386.972 66.9082 386.167 65.5605 386.699C64.2129 387.231 58.8471 400.136 59.3787 401.484C59.9103 402.833 71.7424 411.147 72.8057 411.147C73.8689 411.147 82.4741 402.821 82.4741 402.821L86.245 396.647Z" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M30.3857 403.625C30.3857 403.625 31.7334 396.647 34.6883 395.298C37.6432 393.95 55.6324 375.948 58.5873 374.884C61.5422 373.82 75.7728 374.352 76.5765 375.156C77.3801 375.96 88.6558 387.788 89.7314 388.865C90.8071 389.941 86.5045 393.43 83.5496 393.43C81.3429 393.234 79.2191 392.495 77.3677 391.277" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M29.8542 393.69C29.8542 393.69 57.2398 366.817 59.7126 365.196C62.1853 363.576 66.4137 365.468 68.0333 366.273C69.653 367.077 82.5359 374.612 84.9468 376.171C87.3578 377.729 94.8378 389.062 94.8378 389.062C94.8378 389.062 95.0974 393.368 93.2181 394.976C91.3389 396.585 86.245 396.597 86.245 396.597" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M72.8181 411.147C72.8181 411.147 77.6523 420.29 81.4109 424.584" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M58.847 403.897C58.847 403.897 57.7713 420.29 58.847 427.54C59.9226 434.791 54.0128 446.099 51.6019 449.576C49.1909 453.052 36.5676 454.685 36.5676 454.685" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M592.519 306.034C591.122 304.983 582.369 297.98 585.509 289.95C588.649 281.921 608.246 278.704 608.246 278.704L606.503 270.649C606.503 270.649 598.095 266.443 595.289 260.838C592.482 255.234 598.441 250.681 601.248 252.784C604.055 254.887 618.755 260.133 618.755 260.133" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M569.758 331.62L570.104 311.998C568.885 309.424 567.48 306.943 565.9 304.574C562.401 298.97 563.428 280.399 562.401 275.487C561.375 270.575 557.147 249.208 553.302 239.756C549.457 230.303 558.247 229.586 559.249 232.048C560.25 234.51 571.513 260.071 571.513 260.071C571.513 260.071 572.91 251.311 578.857 249.913C584.804 248.515 586.919 253.068 586.919 253.068C586.919 253.068 585.868 250.965 591.864 248.119C597.86 245.274 604.116 248.119 604.116 248.119C605.167 246.721 611.831 244.964 614.279 247.427C616.727 249.889 623.379 269.845 623.379 269.845C623.379 269.845 624.776 276.502 623.379 280.362C621.982 284.222 614.279 300.331 612.178 304.884C611.038 307.432 609.75 309.91 608.32 312.307L607.628 330.531" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M574.654 259.391C574.654 259.391 580.959 280.424 582.715 283.22C584.471 286.016 586.56 284.259 587.66 284.259" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M586.918 253.13L592.519 282.218" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M601.273 267.148L603.016 278.011" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M604.067 248.218L604.425 253.477" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M571.513 260.133C571.513 260.133 565.554 262.941 564.095 265.082" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M613.723 142.46C613.723 142.46 599.443 129.333 596.809 126.71C594.176 124.087 586.325 126.71 586.028 132.834C585.732 138.958 587.19 140.418 590.108 143.041C593.026 145.664 602.064 150.91 602.064 150.91" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M572.911 183.919L573.207 169.629C573.207 169.629 569.127 169.048 564.751 158.841C560.374 148.633 558.049 120.288 558.927 115.872C559.805 111.455 566.791 109.463 566.791 109.463C566.289 108.141 566.082 106.726 566.182 105.316C566.282 103.906 566.688 102.534 567.372 101.297C569.708 96.9543 576.1 101.025 576.1 101.025C576.1 101.025 576.385 98.6864 576.681 94.6035C576.978 90.5207 583.964 88.4792 587.809 90.2361C591.654 91.993 594.213 104.229 594.213 104.229C595.705 104.143 597.178 103.852 598.59 103.363C599.468 102.782 593.348 76.8121 592.173 68.9433C590.999 61.0745 588.39 49.1476 594.794 50.855C601.199 52.5624 603.548 61.6437 606.453 71.2693C609.359 80.895 615.788 106.271 615.788 106.271C615.788 106.271 617.828 136.608 617.531 142.447C617.234 148.287 618.112 154.696 614.329 160.239C612.69 162.455 611.227 164.797 609.952 167.241L609.087 185.899" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M590.108 143.091C590.108 143.091 585.447 148.337 586.325 154.758C587.203 161.179 590.108 166.128 596.81 167.588" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M594.188 104.242L596.81 126.71" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M576.125 101.037L585.447 127.873" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M566.791 109.5C566.791 109.5 576.991 132.834 579.624 135.16C582.258 137.486 585.447 134.875 585.447 134.875" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M560.67 120.82C560.67 120.82 566.852 135.989 570.561 136.905C574.27 137.82 576.681 134.566 576.681 133.403" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M585.744 137.795C585.744 137.795 574.95 145.664 571.451 152.37" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M586.906 140.418C586.906 140.418 584.57 146.604 583.111 150.316" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M598.565 103.376C598.565 103.376 604.747 102.633 608.283 105.788" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M603.54 438.193C603.54 438.193 621.789 414.067 622.481 410.974C623.174 407.881 620.763 393.059 620.763 393.059C620.763 393.059 618.698 376.121 615.249 373.399C611.799 370.677 602.502 374.438 602.502 374.438C602.502 374.438 595.961 369.267 591.14 371.333C589.664 372.044 588.352 373.055 587.288 374.301C586.224 375.547 585.43 377.001 584.958 378.571C584.958 378.571 574.968 377.544 572.903 379.956C571.633 381.424 570.78 383.206 570.43 385.116C570.43 385.116 559.761 386.848 557.696 391.673C555.631 396.498 552.528 428.196 556.311 435.434L560.107 442.672L561.479 458.867" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M621.06 396.832C621.06 396.832 618.588 385.116 615.546 383.742C612.505 382.369 595.232 375.812 593.502 375.082C591.771 374.352 585.935 380.241 588.68 385.413C591.424 390.584 602.515 396.498 602.515 396.498L601.142 404.417C601.142 404.417 580.483 414.76 579.444 420.265C578.406 425.771 583.24 433.368 583.24 433.368" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M560.478 398.564C560.478 398.564 562.889 404.07 564.62 409.588C566.351 415.106 572.186 417.519 573.917 415.774C575.648 414.03 577.008 408.202 576.662 403.711C576.316 399.22 572.186 388.864 572.186 388.864" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M576.341 412.001C576.341 412.001 578.059 414.475 583.969 414.475" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M585.638 381.676C585.638 381.676 590.46 399.591 589.421 411.308" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M602.502 374.438L603.54 379.61" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M606.953 433.764L602.91 441.311L602.638 457.778" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M369.536 250.567C369.536 250.567 376.361 341.862 377.61 352.106C378.858 362.351 385.98 423.519 385.98 439.356C386.203 450.165 387.663 460.912 390.332 471.388C390.332 471.388 386.289 475.421 386.289 478.527C386.289 480.395 386.186 482.262 385.98 484.119L369.845 493.658C369.845 493.658 359.954 496.764 361.475 500.488C362.996 504.212 371.366 507.627 379.464 507.627C387.563 507.627 399.642 503.593 399.642 503.593C399.642 503.593 409.261 497.407 411.115 497.073C412.97 496.739 419.498 497.073 420.425 493.967C421.352 490.862 423.219 486.829 421.662 482.164C420.104 477.5 417.359 467.676 417.359 467.676C417.359 467.676 418.286 422.344 418.286 413.028C418.286 403.711 413.638 372.038 413.341 367.386C413.044 362.734 410.237 283.861 410.237 283.861L435.373 365.518C435.373 365.518 457.714 451.221 458.023 454.327C458.332 457.432 457.714 473.887 458.332 476.993C458.95 480.098 462.981 487.237 462.981 487.237C465.493 492.581 467.669 498.077 469.497 503.692C471.364 510.212 477.879 518.91 485.953 517.982C494.026 517.054 498.316 512.699 497.735 505.251C497.154 497.803 484.704 480.717 484.704 480.717C484.704 480.717 488.735 467.986 487.498 465.499L479.746 449.971C479.746 449.971 472.909 390.362 470.745 372.347C468.582 354.333 466.035 334.055 466.035 334.055L462.932 251.457L369.536 250.567Z" fill="#2F2E41" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M414.886 89.7882L413.378 97.855C413.378 97.855 371.243 100.54 369.907 102.383C368.572 104.227 358.656 118.344 354.799 129.429C350.941 140.515 350.595 143.521 350.595 143.521C350.595 143.521 332.458 167.202 332.297 170.567C332.136 173.932 347.059 185.34 352.598 185.006C358.137 184.672 371.069 177.582 371.069 177.582C371.069 177.582 371.28 200.36 370.76 202.723C370.241 205.086 364.999 252.534 364.999 252.534C364.999 252.534 389.096 271.414 396.699 273.777L405.354 275.868L407.184 269.843L408.705 275.658C408.705 275.658 435.163 270.412 445.375 265.958C455.588 261.504 467.123 252.583 467.123 252.583L463.414 213.524L468.137 151.378L491.714 187.567L520.274 178.906C520.274 178.906 517.653 168.687 515.032 164.233C512.411 159.779 506.378 150.066 504.029 145.352C501.679 140.639 499.318 122.278 488.042 113.63C476.767 104.981 448.479 96.061 448.479 96.061L446.661 87.9448L414.886 89.7882Z" fill="#2026A2" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M409.805 223.545C408.086 240.99 406.541 258.967 406.541 258.967" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M418.756 158.467C416.729 173.858 414.602 188.903 413.737 191.501C412.995 193.716 411.721 204.678 410.448 217.161" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M423.331 122.488C423.331 122.488 421.526 137.335 419.449 153.258" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M370.377 155.683C370.377 155.683 372.64 125 374.754 118.22" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M365.691 128.13C367.2 135.046 369.215 142.903 370.921 144.499" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M363.503 116.945C363.503 116.945 363.961 119.581 364.678 123.218" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M360.758 136.011C360.758 136.011 366.68 149.373 370.068 150.425" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M358.632 144.066C360.04 145.383 361.606 146.521 363.293 147.456" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M373.888 208.921L402.523 173.957" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M382.061 211.445C377.548 218.869 372.936 226.366 371.131 228.841" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M392.941 193.246C392.941 193.246 389.232 199.617 384.719 207.028" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M450.865 220.96C453.745 224.003 456.243 226.626 457.331 227.789" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M436.993 206.385L448.182 218.139" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M447.44 191.006C448.572 192.873 449.898 194.615 451.396 196.203" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M438.056 174.378C438.056 174.378 441.629 181.455 445.388 187.715" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M413.069 100.626C413.287 106.684 415.035 112.588 418.15 117.787" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M446.735 97.0261L438.056 106.775" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M417.013 77.5273C417.013 77.5273 414.997 89.083 414.886 89.7882C414.775 90.4935 422.601 95.1702 422.601 95.1702L424.283 111.452L432.171 95.8383C432.171 95.8383 442.408 91.4709 446.772 87.9448L444.93 77.3664L417.013 77.5273Z" fill="#A0616A" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M412.5 28.038C412.5 28.038 407.555 29.6959 407.06 34.6572C406.566 39.6185 410.609 46.0026 410.609 46.0026L416.79 28.5205C416.79 28.5205 416.741 27.5678 412.5 28.038Z" fill="#2F2E41" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M414.379 27.8029C414.379 27.8029 409.187 33.989 409.187 37.7007C409.187 41.4124 409.422 50.7041 408.952 54.2425C408.482 57.781 407.777 69.8441 408.482 72.9124C409.187 75.9807 422.181 87.8458 427.374 88.2912C432.566 88.7366 447.156 79.7914 449.097 75.5353C450.331 72.4319 451.125 69.1712 451.458 65.8478C451.458 65.8478 458.777 65.3776 461.609 60.4163C464.44 55.455 458.543 51.1989 458.543 51.1989L455.229 49.4916C455.229 49.4916 456.465 32.9621 454.994 30.599C453.523 28.2359 428.078 21.6662 414.379 27.8029Z" fill="#A0616A" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M424.777 14.849C424.777 14.849 409.657 19.1051 407.542 22.1734C405.428 25.2418 409.422 28.3596 418.67 33.7539C427.918 39.1483 446.055 35.882 448.652 35.1644C451.248 34.4468 446.055 42.9713 447.477 45.3344C449.005 47.4715 450.745 49.4487 452.67 51.236C452.67 51.236 452.2 56.6675 452.905 57.1376C453.609 57.6078 454.796 56.6675 455.031 55.4921C455.266 54.3168 454.327 53.129 456.453 52.1763L458.58 51.236C458.58 51.236 461.881 33.989 460.459 28.5576C459.037 23.1261 453.857 18.1524 444.176 15.3192C437.835 13.6475 431.191 13.4865 424.777 14.849Z" fill="#2F2E41" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M420.994 56.6304C420.994 56.6304 418.398 65.1426 419.337 65.3776C420.762 66.1103 422.341 66.4925 423.943 66.4925C425.545 66.4925 427.123 66.1103 428.548 65.3776" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M434.335 53.9209C434.335 55.5416 433.543 56.8655 432.567 56.8655C431.59 56.8655 430.799 55.5416 430.799 53.9209C430.799 52.3001 431.59 50.9639 432.567 50.9639C433.543 50.9639 434.335 52.2877 434.335 53.9209Z" fill="#2F2E41"/>
<path d="M419.461 52.263C419.461 53.8961 418.67 55.2199 417.693 55.2199C416.716 55.2199 415.925 53.8961 415.925 52.263C415.925 50.6298 416.716 49.306 417.693 49.306C418.67 49.306 419.461 50.6298 419.461 52.263Z" fill="#2F2E41"/>
<path d="M420.524 71.0442C420.524 71.0442 430.91 75.9931 437.054 66.7881" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M429.723 46.2376C429.723 46.2376 437.982 48.6007 439.873 48.1306C441.765 47.6604 442.235 46.7078 439.873 45.2973C437.512 43.8869 427.831 41.9815 428.746 44.0601L429.723 46.2376Z" fill="#2F2E41"/>
<path d="M422.23 44.9509C422.23 44.9509 413.638 45.1984 411.919 44.2704C410.201 43.3425 409.978 42.3156 412.624 41.5238C415.27 40.732 425.099 41.2887 423.665 43.1198L422.23 44.9509Z" fill="#2F2E41"/>
<path d="M381.257 153.728C381.257 153.728 380.763 149.658 379.464 150.314C378.166 150.969 370.352 155.683 370.352 155.683C370.352 155.683 353.909 156.822 351.312 158.455C348.716 160.088 332.26 165.457 331.122 170.184C329.985 174.91 333.892 187.604 337.143 191.019C340.395 194.433 349.186 193.79 349.186 193.79C349.186 193.79 373.604 177.013 374.741 175.875C375.879 174.737 376.534 173.759 377.672 173.4C378.809 173.042 383.853 169.689 384.187 168.835C384.521 167.981 383.371 158.615 381.257 153.728Z" fill="#2026A2" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M376.856 164.48C376.856 164.48 376.534 168.711 382.716 169.033" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M369.858 157.638C369.858 157.638 366.149 168.551 374.259 172.485" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M394.598 157.477C395.849 157.248 397.03 156.731 398.047 155.967C399.064 155.202 399.89 154.212 400.458 153.073C402.09 149.361 405.181 145.093 406.479 144.61C407.777 144.128 412.822 141.183 413.798 139.401C414.775 137.62 414.614 136.63 412.179 136.927C409.743 137.224 400.619 139.698 399.815 141.492C399.011 143.286 394.61 153.704 392.817 155.819C391.024 157.935 392.805 158.121 394.598 157.477Z" fill="#A0616A" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M376.856 153.889C376.856 153.889 385.325 147.381 385.325 146.887C385.325 146.392 391.989 130.11 393.781 128.971C395.574 127.833 408.272 126.2 409.731 126.497C411.19 126.794 419.337 131.545 420.153 132.361L420.969 133.166C421.48 133.856 421.865 134.631 422.107 135.455C422.107 135.455 422.75 137.731 421.773 138.214C420.796 138.696 412.018 138.708 411.363 138.708C410.707 138.708 402.411 141.48 402.411 141.48C402.411 141.48 398.01 153.036 395.574 156.129C393.139 159.222 386.45 160.843 386.45 160.843L376.843 164.43C376.843 164.43 374.581 158.776 376.856 153.889Z" fill="#A0616A" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M422.107 135.492C422.107 135.492 408.111 133.537 406.64 134.019C405.168 134.502 398.344 137.273 398.344 137.273" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M420.969 133.203C420.969 133.203 407.777 130.444 407.134 130.444C406.491 130.444 398.344 132.918 398.344 132.918" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M398.183 129.627L408.927 127.511L416.085 130.11" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M462.684 106.652L467.061 122.204C467.061 122.204 465.466 122.402 462.116 120.608C458.765 118.814 452.521 115.065 449.134 116.018C445.746 116.97 448.726 119.816 450.716 120.806C452.707 121.795 458.295 124.802 460.088 127.19C461.881 129.578 464.675 132.98 467.865 134.168C469.643 134.883 471.527 135.301 473.441 135.405L478.386 146.54L491.739 141.146C491.739 141.146 483.962 125.792 482.38 119.012C480.797 112.232 476.198 109.844 471.611 108.05C468.764 106.97 465.724 106.493 462.684 106.652Z" fill="#A0616A" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M483.925 123.49C482.791 120.182 481.436 116.954 479.87 113.828C479.289 112.851 478.463 112.042 477.475 111.483C476.486 110.923 475.368 110.631 474.232 110.636C472.823 110.636 462.079 110.809 459.791 110.982C457.504 111.155 458.728 113.803 459.964 114.508C461.201 115.213 472.464 115.04 472.464 115.04C472.464 115.04 473.527 128.254 474.937 130.716C476.346 133.178 478.646 136.902 482.503 136.184" fill="#A0616A"/>
<path d="M483.925 123.49C482.791 120.182 481.436 116.954 479.87 113.828C479.289 112.851 478.463 112.042 477.475 111.483C476.486 110.923 475.368 110.631 474.232 110.636C472.823 110.636 462.079 110.809 459.791 110.982C457.504 111.155 458.728 113.803 459.964 114.508C461.201 115.213 472.464 115.04 472.464 115.04C472.464 115.04 473.527 128.254 474.937 130.716C476.346 133.178 478.646 136.902 482.503 136.184" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M476 110.809C476 110.809 470.189 106.577 468.421 106.231C466.653 105.885 459.099 106.751 456.28 107.468C453.461 108.186 453.634 109.411 455.044 110.289C456.453 111.168 460.508 110.462 461.386 110.289C462.264 110.116 476 110.809 476 110.809Z" fill="#A0616A" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M468.421 106.231C468.421 106.231 462.239 102.705 459.767 103.225C457.294 103.744 449.196 105.34 449.369 106.936C449.542 108.532 453.77 108 453.77 108L464.205 106.404L468.421 106.231Z" fill="#A0616A" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M459.804 103.225C459.804 103.225 454.685 101.987 452.929 102.519C451.174 103.051 444.275 105.34 445.177 106.578C446.08 107.815 449.406 106.924 449.406 106.924C449.406 106.924 452.756 104.462 459.804 103.225Z" fill="#A0616A" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M492.468 137.966L474.01 149.015L480.476 160.051C480.476 160.051 493.223 195.089 497.216 200.991C501.21 206.892 509.209 205.742 516.058 203.651C522.908 201.56 524.997 188.99 523.477 183.657C521.956 178.325 496.487 145.996 496.487 145.996L492.468 137.966Z" fill="#2026A2" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M495.671 147.381C495.671 147.381 488.673 154.706 481.02 156.982" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M178.994 223.347C178.994 223.347 164.615 249.8 164.157 281.361C163.7 312.923 170.191 361.658 167.867 370.949C165.542 380.241 158.594 389.05 158.136 403.439C157.679 417.828 159.521 479.096 160.448 481.88C161.376 484.663 153.488 503.692 157.209 512.971C160.931 522.251 166.012 521.793 170.191 518.081C174.37 514.369 177.152 501.836 176.224 493.015C175.297 484.193 173.9 475.842 173.9 475.842C173.9 475.842 191.061 399.257 195.24 386.761C199.419 374.265 212.858 301.392 212.858 301.392C212.858 301.392 222.601 369.626 222.601 374.265C222.601 378.905 217.507 402.585 219.819 415.094C222.131 427.602 232.801 464.707 234.185 472.625C235.57 480.543 230.476 498.607 232.801 501.403C235.125 504.199 247.167 501.403 248.564 501.873C249.961 502.344 259.234 504.657 264.34 504.657C269.447 504.657 281.959 504.657 282.886 501.403C283.813 498.149 266.195 490.268 261.546 486.086C256.897 481.904 250.889 472.167 250.889 470.769C250.889 469.371 249.492 383.05 251.816 372.372C254.14 361.695 259.234 283.724 259.234 263.298C259.306 251.35 257.585 239.46 254.128 228.024L178.994 223.347Z" fill="#2F2E41" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M158.322 431.933C158.47 438.267 158.643 444.911 158.853 451.221H179.439C180.811 445.208 182.344 438.589 183.902 431.933H158.322Z" fill="#707070" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M250.505 431.933H223.849C225.432 438.119 227.237 444.911 228.906 451.221H250.716C250.592 445.468 250.543 438.849 250.505 431.933Z" fill="#707070" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M282.886 501.366C281.959 504.62 269.434 504.62 264.341 504.62C259.247 504.62 249.962 502.319 248.577 501.836C247.192 501.354 235.125 504.162 232.813 501.366C230.501 498.57 235.595 480.482 234.198 472.588C233.456 468.357 230.019 455.65 226.644 442.895L250.58 442.338C250.703 458.038 250.901 470.25 250.901 470.794C250.901 472.192 256.922 481.929 261.559 486.111C266.195 490.293 283.813 498.125 282.886 501.366ZM157.197 512.971C160.906 522.263 166 521.793 170.179 518.081C174.358 514.369 177.139 501.836 176.212 493.015C175.285 484.193 173.888 475.842 173.888 475.842C173.888 475.842 177.288 460.649 181.442 442.697L158.619 442.09C159.15 461.354 159.929 480.358 160.436 481.88C161.363 484.664 153.475 503.692 157.197 512.971Z" fill="#A0616A" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M282.886 501.366C283.517 499.189 275.777 494.92 269.212 491.085C268.201 492.221 266.785 492.914 265.268 493.015C260.545 493.349 242.593 490.54 233.122 488.92C232.319 494.772 231.626 499.98 232.789 501.366C235.101 504.162 247.155 501.366 248.552 501.836C249.949 502.306 259.222 504.62 264.328 504.62C269.435 504.62 281.959 504.62 282.886 501.366Z" fill="#2026A2" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M170.179 518.081C174.123 514.567 176.818 503.234 176.36 494.512C170.104 490.404 162.76 492.186 157.976 494.277C156.504 500.71 155.305 508.159 157.234 512.971C160.906 522.263 166 521.793 170.179 518.081Z" fill="#2026A2" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M224.022 90.3821C224.022 90.3821 221.76 106.986 222.786 109.25C223.812 111.514 233.852 112.962 240.095 112.269C246.339 111.576 253.164 116.55 255.426 119.568C257.689 122.587 274.54 158.071 274.54 158.071C274.54 158.071 271.017 180.453 268.507 182.222C265.997 183.991 256.143 174.675 256.143 174.675L256.897 216.939C256.897 216.939 259.37 227.764 258.406 229.311C257.441 230.857 253.374 231.785 253.374 231.785C239.409 235.786 224.903 237.568 210.385 237.068C187.253 236.066 174.926 226.75 174.172 224.993C173.418 223.236 175.186 219.203 176.645 218.201C178.104 217.198 180.663 210.146 180.663 210.146L186.054 190.536C186.054 190.536 157.617 193.011 159.15 180.218C160.683 167.425 168.707 132.918 170.463 124.864C172.219 116.809 173.232 110.772 186.536 108.78C199.839 106.788 201.619 102.73 201.372 96.9518C201.125 91.1739 201.113 81.3503 201.113 81.3503L224.022 90.3821Z" fill="#2026A2" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M218.323 197.959C215.948 199.855 213.472 201.618 210.905 203.242" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M242.321 179.116C242.321 179.116 231.577 187.777 222.539 194.73" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M245.053 183.682L233.209 194.619" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M219.745 126.608C228.498 124.827 229.759 116.574 229.759 111.935C226.198 111.378 223.281 110.413 222.761 109.25C221.76 106.986 223.998 90.3821 223.998 90.3821L201.113 81.3256C201.113 81.3256 201.113 91.1368 201.372 96.9271C201.521 100.354 200.939 103.113 197.663 105.291C199.592 109.522 208.766 128.86 219.745 126.608Z" fill="#A0616A" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M237.351 48.1058C237.351 48.1058 240.874 55.158 239.823 58.1769C239.282 59.8772 239.209 61.6924 239.614 63.4304C240.019 65.1685 240.886 66.7647 242.123 68.05C244.893 71.0689 246.908 73.0856 243.631 75.5971C240.355 78.1087 240.12 79.3088 240.12 79.3088C240.12 79.3088 238.884 91.6812 236.411 93.1535C233.938 94.6258 218.051 92.1389 212.524 90.1346C206.998 88.1303 205.23 87.6602 203.969 83.8371C202.708 80.0141 205.205 57.6696 208.247 51.1247C211.288 44.5797 222.329 39.804 225.84 39.804C229.351 39.804 237.351 48.1058 237.351 48.1058Z" fill="#A0616A" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M211.374 63.6207L222.007 57.4346L222.267 48.6255L226.038 55.6777L243.631 48.3657C243.631 48.3657 243.631 39.804 233.827 32.7641C224.022 25.7243 203.4 25.7119 193.348 32.7641C183.296 39.8164 178.512 46.8562 177.003 56.1602C175.495 65.4642 172.231 91.6441 170.216 99.6861C168.2 107.728 188.576 114.285 200.383 113.023C212.19 111.761 222.23 100.651 222.23 100.651C222.23 100.651 215.083 93.2277 214.811 82.6123C214.632 76.1442 213.473 69.7409 211.374 63.6207Z" fill="#2F2E41" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M233.456 67.7284C234.358 67.7284 235.088 66.3214 235.088 64.5858C235.088 62.8502 234.358 61.4432 233.456 61.4432C232.555 61.4432 231.824 62.8502 231.824 64.5858C231.824 66.3214 232.555 67.7284 233.456 67.7284Z" fill="#2F2E41"/>
<path d="M229.562 59.1791C229.562 59.1791 232.826 56.7046 236.349 57.4222" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M228.548 78.0469C229.697 79.3181 231.173 80.249 232.815 80.7377C234.456 81.2265 236.201 81.2543 237.857 80.8183" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M192.841 131.891L189.33 176.184" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M189.33 176.184C189.33 176.184 180.268 170.901 176.249 171.903C172.231 172.906 157.704 192.788 158.656 195.559C159.608 198.331 173.233 210.406 173.233 210.406C173.233 210.406 181.281 211.408 184.545 209.651C187.809 207.894 193.101 196.561 193.101 196.561C193.101 196.561 195.413 181.467 189.33 176.184Z" fill="#2026A2" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M228.041 125.854C228.041 125.854 214.441 139.191 212.71 141.455C210.979 143.719 179.773 183.521 177.251 185.241C174.728 186.96 171.724 196.809 176.496 202.562C181.269 208.315 185.559 209.614 196.365 201.053C207.171 192.491 218.496 149.707 218.496 149.707C218.496 149.707 224.529 151.217 229.623 148.953C234.717 146.689 235.904 145.439 235.904 145.439C235.904 145.439 236.411 147.703 238.377 146.948C240.343 146.194 243.916 140.156 243.656 139.141C243.396 138.127 238.884 128.575 238.884 128.575C238.884 128.575 247.687 120.781 250.196 117.255C252.706 113.729 249.195 114.483 246.673 116.018C243.011 118.307 239.235 120.409 235.36 122.315C232.825 123.342 230.316 123.589 228.041 125.854Z" fill="#A0616A" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M238.859 128.625L233.333 126.113" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M241.628 134.415L232.825 130.382" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M243.632 139.191L233.073 135.17" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M235.842 145.488L239.106 142.21" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M267.024 155.3C267.024 155.3 251.433 171.149 252.187 176.432C252.941 181.715 259.976 196.314 263.747 197.316C267.518 198.318 274.306 195.299 279.091 185.748C283.875 176.197 282.107 166.62 278.336 162.34C274.565 158.059 270.535 153.53 267.024 155.3Z" fill="#2026A2" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M248.663 136.432C248.663 136.432 255.711 157.811 255.958 168.13" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M263.253 123.342C263.253 123.342 262.499 116.797 256.96 116.797C253.127 116.797 251.928 114.038 254.957 112.776C256.343 112.23 257.854 112.081 259.32 112.348C260.785 112.615 262.148 113.286 263.253 114.285C265.008 116.042 268.532 105.984 270.288 102.457C272.043 98.9314 275.06 83.5897 276.074 84.3444C277.088 85.0991 277.075 87.6107 277.31 91.3842C277.31 91.3842 280.587 80.8183 281.848 83.0824C283.109 85.3465 281.848 89.3799 281.848 89.3799C281.848 89.3799 284.32 87.6107 284.11 89.8748C283.9 92.1389 283.851 96.927 282.874 101.01C282.425 102.979 281.838 104.914 281.118 106.8C281.118 106.8 285.643 94.9722 286.398 95.9744C287.152 96.9765 284.889 107.295 284.135 109.819C283.56 111.605 282.883 113.356 282.107 115.065C282.107 115.065 281.6 123.119 279.338 126.893C278.026 129.118 276.22 131.01 274.059 132.423C274.059 132.423 280.352 160.1 283.109 167.907C285.866 175.714 280.352 187.022 277.323 189.286C274.294 191.551 271.289 190.301 266.517 185.773C261.744 181.244 260.483 173.19 261.992 166.138C263.5 159.086 265.256 131.149 265.256 131.149C265.256 131.149 263.747 129.132 263.253 123.342Z" fill="#A0616A" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M265.255 115.795C266.969 116.304 268.747 116.558 270.535 116.55C272.303 116.302 276.074 120.83 275.06 126.608" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M277.323 91.3842C277.323 91.3842 275.567 102.519 273.811 106.986" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M281.86 89.3799C281.86 89.3799 278.843 103.719 277.322 108.495" stroke="#2F2E41" stroke-miterlimit="10"/>
<path d="M281.106 106.738L279.844 109.757" stroke="#2F2E41" stroke-miterlimit="10"/>
</g>
<defs>
<clipPath id="clip0_111_378">
<rect width="624" height="532" fill="white"/>
</clipPath>
</defs>
</svg>
    </div>
  )
}

export default Hero
