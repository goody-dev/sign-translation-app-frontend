import React, { useState } from 'react'
import EmailIcon from '../assets/icons/closed-blue-envelope.png'
import HashIcon from '../assets/icons/hidden-characters-icon.png'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emptyEmail, setEmptyEmail] = useState(null);
  const [invalidEmail, setInvalidEmail] = useState(null);
  const [usedEmail, setUsedEmail] = useState(null)

  const [password, setPassword] = useState('');
  const [emptyPassword, setEmptyPassword] = useState(null);
  const [invalidPassword, setInvalidPassword] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const validateEntry = () => {

    var validity = true;
    var testForNonDigits = /[^0-9]/.test(password);
    const testForValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/.test(email);

    if (email != '') {
      validity *= true;
      setEmptyEmail(false);
    } else {
      validity *= false;
      setEmptyEmail(true);
    }

    if (testForValidEmail === true) {
      validity *= true;
      setInvalidEmail(false);
    } else {
      validity *= false;
      setInvalidEmail(true);
    }
    
    if (password.length >= 8) {
      validity *= true;
      setInvalidPassword(false);
    } else {
      validity *= false;
      setInvalidPassword(true);
    }

    return validity;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      "email": email,
      "password": password,
      "role": "user"
    }
    const validity = validateEntry();

    validity == 1 && await fetch ('https://signs-5no9.onrender.com/auth/signin', {
      method:"POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then(response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

  }

  return (
    <div className='flex flex-row items-center w-100% max-w-[100vw] gap-[var(--custom-gap)] bg-[#F1F1F1]'>
      <svg className='w-[50vw] h-[calc(100vh-97.19px)]' viewBox="0 0 696 926" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_36_108)">
        <rect width="696" height="926" fill="#F1F1F1"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M606.308 538.415C612.601 531.825 617.286 523.561 617.727 514.003C618.996 486.464 582.644 490.286 574.156 503.699C565.668 517.113 562.566 552.279 571.259 555.309C574.725 556.517 582.615 554.572 590.93 550.05L581.941 586.604L610.684 588.385L606.308 538.415Z" fill="#B28B67"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M631.618 506.316C632.681 505.384 633.356 504 633.952 502.682C634.571 501.314 635.179 499.93 635.647 498.494C636.582 495.625 636.947 492.28 635.208 489.893C633.814 487.979 631.517 487.013 629.336 486.694C627.883 486.482 626.354 486.6 624.897 486.993C623.451 487.383 622.147 488.262 620.731 488.769C621.017 485.631 620.856 482.317 619.626 479.542C618.441 476.872 616.267 475.277 613.655 474.723C610.975 474.155 608.214 474.649 605.628 475.873C604.981 476.179 604.338 476.503 603.715 476.875C603.194 477.187 602.645 477.568 602.062 477.671C601.412 477.786 601.139 477.383 600.779 476.872C600.357 476.273 599.867 475.738 599.339 475.257C597.004 473.133 593.75 472.111 590.675 473.096C589.258 473.55 587.838 474.384 586.78 475.591C585.837 476.667 585.058 478.421 583.839 479.134C583.322 479.437 583.03 478.973 582.627 478.617C582.021 478.084 581.452 477.501 580.837 476.98C579.973 476.248 579.014 475.68 577.957 475.347C576.41 474.86 574.206 474.809 573.518 476.958C573.259 477.766 573.296 478.65 573.262 479.478C573.216 480.615 573.174 481.753 573.146 482.889C573.125 483.753 573.126 484.588 573.19 485.441C573.224 485.896 573.393 486.75 573.16 487.188C572.87 487.736 571.843 487.348 571.388 487.338C570.488 487.319 569.571 487.425 568.7 487.773C568.025 488.042 567.302 488.456 566.948 489.208C566.731 489.671 566.722 490.16 566.749 490.652C566.78 491.242 566.639 491.545 566.505 492.13C565.369 491.432 561.35 489.785 560.583 492.009C560.328 492.75 560.634 493.625 560.869 494.278C561.282 495.425 561.87 496.486 562.479 497.501C563.749 499.619 565.337 501.478 567.087 503.093C564.737 503.991 563.823 507.027 565.564 508.984C566.333 509.848 567.464 510.103 568.548 510.12C568.946 510.127 569.532 510.005 569.835 510.097C569.998 510.146 570.161 510.306 570.391 510.338C571.903 510.545 573.664 510.272 575.191 510.014C577.911 509.554 580.565 508.399 582.831 506.526C583.413 506.046 583.879 505.778 584.587 505.831C585.207 505.878 585.796 506.095 586.415 506.152C588.05 506.301 589.62 505.557 591.203 505.096C591.065 507.258 591.396 509.67 592.03 511.664C592.546 513.29 593.955 513.612 595.349 513.842C599.806 514.576 604.38 514.373 608.89 514.67C604.412 515.422 599.855 515.557 595.397 516.495C593.381 516.918 594.727 518.396 595.46 519.407C596.668 521.073 597.482 523.092 597.972 525.196C600.421 522.417 604.403 520.739 607.651 521.851C611.241 523.079 613.28 528.482 610.513 532.094C608.906 534.19 606.338 534.874 604.175 535.68C605.595 537.535 605.707 540.147 606.44 542.389C606.802 543.494 607.342 544.753 608.37 545.196C608.75 545.36 609.212 545.402 609.487 545.759C609.828 546.202 609.87 546.675 610.324 547.066C612.138 548.625 615.222 548.713 617.167 546.956C618.925 545.367 618.802 542.664 617.67 540.865C619.864 540.085 623.81 539.154 623.344 535.679C627.921 535.656 639.778 528.651 634.288 522.618C637.846 520.853 641.44 516.21 639.749 511.804C638.448 508.411 634.757 506.694 631.618 506.316Z" fill="#191847"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M656.611 747.874L563.101 742.446L531.658 902.469L670.855 910.549L656.611 747.874Z" fill="#C5CFD6"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M657.506 749.573L629.516 747.921L594.087 905.988L671.369 910.549L657.506 749.573Z" fill="black" fill-opacity="0.1"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M451.722 706.195C442.411 699.215 424.787 706.261 423.832 715.317C420.974 742.411 430.764 871.614 431.125 879.764C431.486 887.915 444.357 890.898 446.206 880.77C449.148 864.656 457.387 808.744 457.901 782.65C458.113 771.88 458.199 761.614 458.183 752.45C467.971 776.677 483.395 811.455 504.457 856.784L519.139 850.956C512.246 812.103 506.128 784.594 500.788 768.426C491.644 740.744 482.837 716.974 478.962 708.551C472.866 695.301 459.407 698.912 451.722 706.195Z" fill="#B28B67"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M523.446 829.443L485.323 708.014C475.122 688.024 437.472 709.132 440.411 720.55C447.083 746.472 486.513 831.447 488.5 839.17L523.446 829.443Z" fill="#2F3676"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M525.052 844.266C527.959 847.153 529.817 849.462 530.624 851.191C531.605 853.295 532.693 856.526 533.888 860.883C531.491 862 509.948 872.036 469.258 890.991C464.942 886.12 464.487 882.617 467.896 880.48C471.304 878.344 474.12 876.536 476.344 875.058L500.022 847.429C500.477 846.897 501.278 846.846 501.81 847.315C501.819 847.323 501.828 847.331 501.837 847.339L505.993 851.209C510.085 851.239 513.178 850.767 515.273 849.791C516.974 848.999 518.998 847.204 521.343 844.408C522.243 843.335 523.843 843.216 524.917 844.141C524.964 844.181 525.009 844.223 525.052 844.266Z" fill="#E4E4E4"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M451.214 872.123C452.166 876.214 452.532 879.252 452.311 881.24C452.043 883.657 451.276 887.161 450.011 891.751C447.4 891.588 423.931 890.123 379.605 887.355C378.496 880.746 379.942 877.306 383.941 877.034C387.941 876.762 391.267 876.499 393.921 876.245L428.384 862.623C429.047 862.361 429.751 862.711 429.957 863.404C429.961 863.416 429.964 863.428 429.967 863.44L431.462 869.05C434.909 871.106 437.773 872.206 440.054 872.348C441.908 872.464 444.557 871.82 448.002 870.416C449.323 869.877 450.74 870.561 451.165 871.942C451.183 872.002 451.2 872.062 451.214 872.123Z" fill="#E4E4E4"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M418.64 725.096C414.935 759.555 421.906 840.939 421.1 848.527L454.692 850.72C457.487 778.682 459.641 742.323 461.154 741.643C463.424 740.622 548.12 756.287 573.849 757.945C610.95 760.336 628.935 736.805 635.064 691.463L561.569 686.726C546.424 687.439 466.594 698.909 436.996 702.712C424.324 704.341 419.661 715.604 418.64 725.096Z" fill="#5C63AB"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M553.646 608.69L513.258 581.185C507.058 571.807 500.749 564.428 494.332 559.046C492.309 557.98 488.657 557.178 491.434 563.865C494.211 570.553 496.837 577.733 494.854 579.611C492.871 581.488 488.76 578.422 486.294 581.594C484.65 583.709 491.811 587.68 507.776 593.505L535.825 625.562L553.646 608.69ZM483.983 625.209L466.246 613.094C464.731 602.334 462.132 596.802 458.45 596.497C455.764 594.931 459.262 608.63 454.013 607.123C448.764 605.617 436.749 594.54 434.266 596.471C430.592 599.329 432.559 608.958 435.566 613.879C441.188 623.076 446.3 626.426 459.312 631.221C466.115 633.729 473.267 638.336 480.767 645.043L483.983 625.209Z" fill="#997659"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M576.568 605.484C561.374 604.348 541.45 599.724 521.354 584.1L510.716 603.213C523.976 619.526 543.596 633.486 562.011 634.121C576.522 634.621 585.888 616.951 576.568 605.484Z" fill="#2F3676"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M553.847 635.061C537.492 638.194 511.343 631.573 475.399 615.197C463.944 634.736 458.106 648.816 457.884 657.437C488.115 677.091 514.803 686.705 537.43 688.684C535.192 702.743 535.386 716.27 539.57 728.888C548.171 754.828 616.932 735.746 638.712 741.777C657.769 695.199 632.874 674.168 636.121 643.788C639.677 610.52 619.699 557.672 615.948 557.43L581.749 555.228C577.129 580.513 564.618 607.901 553.847 635.061Z" fill="#2E42A5"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M148.418 259.214C144.181 253.713 141.62 247.085 142.933 239.841C146.714 218.969 177.244 224.927 182.159 235.759C187.073 246.591 183.518 273.368 175.519 274.917C172.33 275.535 165.9 273.401 159.562 269.288L160.815 297.61L135.825 296.521L148.418 259.214Z" fill="#915B3C"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M145.088 264.153C143.197 250.814 134.932 241.402 136.926 235.57C138.256 231.683 140.99 229.352 145.13 228.58C148.006 220.883 155.084 217.877 166.365 219.563C183.286 222.092 193.063 229.111 187.108 243.295C182.965 243.105 178.104 241.496 170.95 243.543C168.681 244.193 166.877 246.448 165.54 250.307L162.415 250.164C159.848 245.393 157.029 243.554 153.958 244.647C150.886 245.739 149.916 248.69 151.047 253.5L148.413 264.305L145.088 264.153Z" fill="#191847"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M56.9892 411.796L179.427 417.025C188.835 417.427 195.695 424.85 194.749 433.605L184.903 524.754C183.957 533.509 175.564 540.28 166.156 539.878L43.718 534.649C34.3099 534.247 27.4498 526.824 28.3955 518.069L38.2419 426.92C39.1877 418.165 47.5811 411.394 56.9892 411.796ZM71.0273 440.264C68.6753 440.164 66.5769 441.857 66.3405 444.045L59.9189 503.491C59.6825 505.679 61.3975 507.535 63.7495 507.635L152.118 511.41C154.47 511.51 156.568 509.817 156.804 507.629L163.226 448.184C163.462 445.995 161.747 444.139 159.395 444.039L71.0273 440.264Z" fill="#C5CFD6"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M293.542 542.469C275.086 517.964 262.75 499.859 256.537 488.154C245.897 468.112 237.329 450.32 234.74 443.555C228.567 427.423 254.92 421.214 259.978 428.838C267.633 440.379 282.853 476.285 305.636 536.557L293.542 542.469Z" fill="#B28B67"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M251.096 533.669L221.316 441.423C214.659 424.551 255.903 415.554 261.242 423.509C273.364 441.568 299.426 511.813 303.038 517.194L251.096 533.669Z" fill="#2F3676"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M146.949 509.162C155.688 499.494 187.179 467.054 203.856 453.781C208.648 449.968 213.317 446.31 217.728 442.904C230.837 432.779 252.73 451.605 239.745 460.784C207.407 483.642 160.508 514.366 156.57 517.115C151.05 520.969 141.458 515.238 146.949 509.162Z" fill="#915B3C"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M149.798 504.326C146.835 506.268 144.866 507.867 143.891 509.122C142.705 510.65 141.242 513.036 139.502 516.282C141.369 517.38 158.14 527.253 189.816 545.9C194.31 542.566 195.276 539.906 192.714 537.921C190.151 535.935 188.04 534.262 186.382 532.902L170.684 509.237C170.382 508.782 169.705 508.663 169.173 508.972C169.164 508.978 169.155 508.983 169.146 508.989L164.954 511.566C161.449 511.186 158.881 510.516 157.251 509.556C155.926 508.776 154.491 507.191 152.946 504.802C152.353 503.884 151.004 503.634 149.933 504.243C149.887 504.269 149.842 504.297 149.798 504.326Z" fill="#E4E4E4"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M287.415 538.53C285.886 541.518 285.042 543.767 284.883 545.277C284.69 547.113 284.732 549.807 285.01 553.358C287.271 553.457 307.586 554.347 345.957 556.027C348.06 551.163 347.427 548.459 344.056 547.916C340.685 547.373 337.888 546.894 335.664 546.478L308.59 533.337C308.069 533.084 307.406 533.287 307.109 533.79C307.104 533.798 307.099 533.807 307.094 533.816L304.835 537.898C301.53 539.149 298.89 539.731 296.915 539.644C295.31 539.574 293.158 538.866 290.46 537.521C289.424 537.005 288.094 537.397 287.489 538.398C287.463 538.441 287.438 538.485 287.415 538.53Z" fill="#E4E4E4"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M204.05 444.318C171.952 437.936 150.459 433.592 139.571 431.287C108.537 424.719 100.914 408.655 109.797 374.773L167.93 377.431C175.417 379.83 206.284 393.959 260.532 419.819C270.245 424.942 266.963 438.587 264.645 443.026C264.551 443.207 244.651 469.523 204.945 521.974L160.206 491.887L203.808 447.611C205.029 445.749 205.11 444.652 204.05 444.318Z" fill="#5C63AB"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M215.1 366.1L247.23 391.22C256.349 393.995 263.872 397.273 269.798 401.053C271.155 402.376 272.692 405 266.587 404.278C260.483 403.556 254.015 403.052 252.972 404.962C251.928 406.871 255.415 409.373 253.437 411.923C252.118 413.623 247.157 408.979 238.555 397.992L205.721 383.261L215.1 366.1ZM82.5983 360.817L105.185 361.94C87.0386 403.144 77.2813 425.001 75.9127 427.511C72.8333 433.157 77.248 442.175 79.0394 446.994C71.3581 449.72 73.282 438.402 63.5769 441.995C54.7184 445.275 47.5931 451.628 38.3473 445.552C37.2106 444.805 36.15 442.141 39.5471 440.253C48.0105 435.551 60.3639 427.208 62.2056 424.359C64.7171 420.475 71.5146 399.294 82.5983 360.817Z" fill="#915B3C"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M154.61 280.485L163.998 279.451C195.526 308.161 204.309 360.963 243.528 390.505L232.245 401.54C160.177 389.953 148.57 325.506 154.61 280.485Z" fill="#2F3676"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M102.782 384.4C139.445 386.081 166.413 387.318 183.687 388.11C187.384 388.279 187.185 383.306 186.901 380.788C183.629 351.73 162.674 319.607 166.796 278.645L143.8 274.188C121.606 302.038 111.37 337.11 102.782 384.4Z" fill="#DDE3E9"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M111.3 300.464C108.022 299.409 105.565 297.188 103.929 293.799C96.8762 279.193 100.722 271.507 110.039 269.352C119.356 267.196 126.904 272.867 141.338 273.532C142.123 273.568 142.838 273.647 143.482 273.768L150.704 274.488C164.959 341.061 166.317 385.102 154.777 406.612L91.491 403.698C86.9269 411.651 82.6536 418.323 78.6711 423.713L61.4267 422.919C64.6915 374.076 81.3159 333.257 111.3 300.464Z" fill="#2026A2"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M109.332 370.071C109.773 385.66 111.891 397.056 115.686 404.26L92.1043 403.178C97.4498 393.888 103.193 382.853 109.332 370.071Z" fill="black" fill-opacity="0.1"/>
        <path d="M101.295 742.026L119.453 736.86C121.984 727.274 122.137 717.215 119.898 707.557C112.19 723.407 90.8716 726.708 78.4076 739.17C74.5499 743.086 71.623 747.821 69.8439 753.022C68.0647 758.224 67.4789 763.759 68.1297 769.217L63.9604 781.941C72.8213 781.451 81.4707 779.046 89.3126 774.891C97.1544 770.736 104.002 764.931 109.385 757.875C112.365 753.887 114.831 749.539 116.725 744.935C109.077 743.937 101.295 742.026 101.295 742.026Z" fill="#6C63FF"/>
        <path d="M23.9353 837.558C17.963 836.553 12.8971 835.31 12.8971 835.31L24.1012 832.122C24.5054 825.74 25.7971 819.68 29.4453 814.376C20.9139 816.856 13.0335 821.184 6.36407 827.054C-0.305376 832.924 -5.60017 840.19 -9.14401 848.337C-12.6878 856.484 -14.3937 865.312 -14.1405 874.193C-13.8872 883.074 -11.681 891.79 -7.67867 899.722L1.33399 889.82C6.40369 887.694 10.93 884.455 14.5776 880.342C18.2252 876.229 20.9005 871.348 22.4052 866.06C24.9039 857.018 23.9079 847.073 23.9353 837.558Z" fill="#6C63FF"/>
        <path d="M498 155C526.167 155 549 132.167 549 104C549 75.8335 526.167 53 498 53C469.833 53 447 75.8335 447 104C447 132.167 469.833 155 498 155Z" fill="#FCD2DB"/>
        <path d="M74.2295 699.716C70.3097 701.051 66.4748 702.623 62.746 704.424L71.2671 696.168C69.892 694.862 68.249 693.87 66.4522 693.262C64.6554 692.654 62.7479 692.445 60.862 692.648C56.3967 693.268 52.5504 696.472 50.4277 700.449C48.4306 704.521 47.6022 709.067 48.0347 713.582C48.608 721.78 51.8302 729.569 57.2159 735.777C62.6676 732.022 68.0225 727.917 71.8205 722.5C75.6804 716.995 77.7584 709.887 75.8933 703.427C75.5089 702.121 74.9492 700.872 74.2295 699.716Z" fill="#6C63FF"/>
        <path d="M96.0585 838.346L112.891 833.557C116.292 828.301 118.847 822.544 120.462 816.495C106.198 826.848 85.837 819.721 68.9731 824.846C63.7257 826.484 58.9142 829.283 54.8953 833.034C50.8764 836.785 47.753 841.392 45.7567 846.514L36.0872 855.775C44.1349 859.515 52.8979 861.467 61.7723 861.494C70.6466 861.522 79.4215 859.625 87.4923 855.935C95.1794 852.312 102.018 847.112 107.562 840.672C101.39 839.655 96.0585 838.346 96.0585 838.346Z" fill="#6C63FF"/>
        <path d="M-9.21187 896.409C-12.9254 898.53 -16.7352 900.474 -20.6414 902.241C-19.7605 902.963 -18.9035 903.664 -18.0649 904.357C-14.6232 902.762 -11.2542 901.029 -7.95779 899.158C-7.40625 898.845 -6.85082 898.523 -6.29155 898.191C-0.227919 894.651 5.56622 890.668 11.0437 886.276C21.6005 877.838 30.9303 867.971 38.7639 856.959C38.9073 856.769 39.0376 856.585 39.1718 856.391C41.3047 853.356 43.3236 850.231 45.2077 847.039C45.5924 846.397 45.9716 845.743 46.347 845.097C47.3544 843.317 48.3248 841.522 49.2583 839.711C52.6567 833.109 55.5197 826.245 57.8197 819.185C61.7522 807.11 64.0824 794.571 64.7504 781.89C64.7983 780.99 64.8462 780.09 64.8626 779.188C64.8875 778.657 64.9032 778.122 64.9188 777.587C65.249 763.469 63.5161 749.378 59.7751 735.76C59.6362 735.259 59.4936 734.767 59.3509 734.275C59.0121 733.106 58.6601 731.943 58.2951 730.786C58.2389 730.587 58.136 730.404 57.9951 730.253C57.8542 730.102 57.6793 729.987 57.4849 729.917C57.2905 729.847 57.0823 729.825 56.8775 729.852C56.6726 729.878 56.4771 729.954 56.3072 730.071C55.9724 730.232 55.7077 730.51 55.5622 730.852C55.4167 731.194 55.4003 731.577 55.5162 731.93C55.8114 732.864 56.1029 733.807 56.3628 734.748C56.7078 735.876 57.0173 737.01 57.3046 738.147C63.7867 762.878 63.4911 788.899 56.4488 813.476C52.0634 828.605 45.1349 842.876 35.9602 855.679L35.951 855.675C30.4407 863.396 24.1652 870.542 17.22 877.003C15.8322 878.29 14.42 879.549 12.9834 880.78C9.25366 883.987 5.35703 886.994 1.30974 889.79C-2.09481 892.158 -5.602 894.364 -9.21187 896.409Z" fill="#3F3D56"/>
        <path d="M564.435 48.5074C539.718 45.1664 511.5 58.5261 505.094 82.6309C503.479 78.3451 500.544 74.6834 496.712 72.1749C492.88 69.6665 488.35 68.4411 483.777 68.6758C479.203 68.9105 474.822 70.5931 471.267 73.4807C467.712 76.3682 465.167 80.311 464 84.7396L466.83 86.7663C519.797 98.2206 574.627 97.9727 627.489 86.0399C610.296 67.971 589.152 51.8483 564.435 48.5074Z" fill="#E1E4F4"/>
        <path d="M283.435 80.5074C258.718 77.1664 230.5 90.5261 224.094 114.631C222.479 110.345 219.544 106.683 215.712 104.175C211.88 101.666 207.35 100.441 202.777 100.676C198.203 100.91 193.822 102.593 190.267 105.481C186.712 108.368 184.167 112.311 183 116.74L185.83 118.766C238.797 130.221 293.627 129.973 346.489 118.04C329.296 99.971 308.152 83.8483 283.435 80.5074Z" fill="#E1E4F4"/>
        <path d="M173.317 909.528C169.451 902.37 168.911 892.989 173.658 886.382C176.006 894.912 181.295 902.336 188.589 907.341C191.409 909.261 194.746 911.103 195.711 914.376C196.218 916.462 195.905 918.663 194.837 920.525C193.771 922.364 192.473 924.058 190.976 925.567L190.839 926.079C183.841 921.931 177.183 916.685 173.317 909.528Z" fill="#F2F2F2"/>
        <path d="M746.238 568.307C728.323 568.86 713.841 563.643 703.194 552.801C695.289 544.751 689.602 533.771 686.292 520.167C683.866 510.128 683.038 499.769 683.839 489.472C687.99 434.683 675.424 408.123 664.152 395.491C651.793 381.639 638.177 380.965 638.041 380.96L638.074 380.063C638.214 380.068 652.177 380.74 664.798 394.866C672.074 403.009 677.524 413.999 680.996 427.53C685.318 444.371 686.575 465.234 684.734 489.54C683.94 499.743 684.761 510.007 687.164 519.954C692.593 542.267 707.244 568.613 746.211 567.41L746.238 568.307Z" fill="#2F2E41"/>
        <path d="M675.484 397.684L674.706 397.235C681.461 385.514 675.797 376.709 669.856 371.387C667.193 369.008 664.17 367.063 660.9 365.626C646.534 359.274 637.714 351.841 634.684 343.533C632.357 337.153 634.456 332.738 634.546 332.553L635.353 332.947C635.332 332.989 633.331 337.24 635.54 343.26C637.572 348.798 643.684 357.032 661.263 364.805C664.619 366.28 667.721 368.276 670.455 370.718C676.643 376.262 682.539 385.441 675.484 397.684Z" fill="#2F2E41"/>
        <path d="M675.153 345.83C675.085 347.598 674.67 349.334 673.931 350.941C673.192 352.548 672.144 353.994 670.846 355.195C669.548 356.397 668.026 357.331 666.367 357.945C664.709 358.558 662.945 358.839 661.178 358.77C659.41 358.702 657.674 358.286 656.067 357.547C654.461 356.807 653.015 355.758 651.814 354.46C650.613 353.162 649.679 351.64 649.067 349.981C648.454 348.321 648.174 346.558 648.243 344.791C648.53 337.36 662.634 321.092 662.634 321.092C662.634 321.092 675.44 338.399 675.153 345.83Z" fill="#6C63FF"/>
        <path d="M649.476 312.553C649.408 314.32 648.993 316.057 648.254 317.664C647.515 319.27 646.467 320.716 645.169 321.918C643.871 323.119 642.35 324.053 640.691 324.667C639.032 325.28 637.268 325.561 635.501 325.493C633.734 325.424 631.997 325.008 630.39 324.269C628.784 323.529 627.339 322.48 626.138 321.182C624.936 319.884 624.003 318.362 623.39 316.703C622.777 315.044 622.497 313.28 622.566 311.513C622.853 304.082 636.957 287.814 636.957 287.814C636.957 287.814 649.763 305.122 649.476 312.553Z" fill="#6C63FF"/>
        <path d="M709.407 454.908C706.699 456.535 703.518 457.192 700.387 456.771C697.256 456.35 694.362 454.877 692.18 452.592C689.998 450.308 688.658 447.349 688.381 444.203C688.104 441.056 688.906 437.908 690.655 435.278C694.811 429.026 714.68 422.64 715.524 422.371L716.058 422.202L716.108 422.759C716.186 423.641 717.984 444.434 713.827 450.686C712.687 452.405 711.177 453.848 709.407 454.908ZM696.663 431.417C694.297 432.833 692.371 434.319 691.402 435.775C689.491 438.65 688.8 442.166 689.481 445.55C690.162 448.934 692.16 451.909 695.034 453.821C697.909 455.732 701.425 456.423 704.809 455.742C708.194 455.061 711.169 453.064 713.08 450.189C716.696 444.75 715.521 426.821 715.259 423.403C712.877 424.195 703.131 427.545 696.663 431.417Z" fill="#2F2E41"/>
        <path d="M622.407 363.009C624.14 363.36 625.787 364.049 627.254 365.036C628.721 366.024 629.979 367.291 630.956 368.764C631.933 370.238 632.611 371.89 632.95 373.625C633.288 375.361 633.282 377.146 632.931 378.879C632.58 380.612 631.891 382.259 630.904 383.726C629.916 385.192 628.649 386.45 627.176 387.428C625.702 388.405 624.05 389.082 622.315 389.421C620.579 389.76 618.794 389.754 617.061 389.403C609.773 387.926 595.98 371.394 595.98 371.394C595.98 371.394 615.119 361.532 622.407 363.009Z" fill="#6C63FF"/>
        <path d="M624.5 427.669C628 428.378 631.075 430.448 633.049 433.424C635.022 436.4 635.733 440.039 635.024 443.539C634.315 447.039 632.244 450.114 629.268 452.087C626.292 454.061 622.654 454.771 619.154 454.062C611.865 452.586 598.072 436.054 598.072 436.054C598.072 436.054 617.212 426.192 624.5 427.669Z" fill="#6C63FF"/>
        <path d="M658.79 416.384C654.934 418.693 645.374 419.456 644.935 419.49L644.376 419.533L644.456 418.978C644.524 418.505 646.155 407.342 649.152 404.536C650.639 403.143 652.618 402.399 654.654 402.465C656.69 402.532 658.617 403.405 660.009 404.892C661.402 406.379 662.147 408.358 662.08 410.394C662.013 412.431 661.14 414.357 659.653 415.749C659.389 415.991 659.099 416.204 658.79 416.384ZM645.432 418.544C647.767 418.324 656.632 417.35 659.04 415.094C660.352 413.864 661.121 412.163 661.18 410.366C661.238 408.568 660.58 406.821 659.351 405.508C658.121 404.196 656.421 403.425 654.623 403.366C652.826 403.306 651.079 403.963 649.765 405.191C647.356 407.448 645.805 416.229 645.432 418.544Z" fill="#2F2E41"/>
        <path d="M340.985 797.646C343.755 800.901 345.119 805.123 344.776 809.383C344.433 813.643 342.412 817.592 339.157 820.362C335.902 823.132 331.68 824.495 327.42 824.153C323.16 823.81 319.211 821.788 316.441 818.534C310.673 811.756 309.914 786 309.914 786C309.914 786 335.217 790.868 340.985 797.646Z" fill="#6C63FF"/>
        <path d="M193.834 906.648C197.137 909.358 199.228 913.268 199.649 917.519C200.07 921.769 198.785 926.014 196.078 929.318C193.371 932.622 189.463 934.717 185.212 935.141C180.961 935.565 176.716 934.284 173.41 931.579C166.525 925.939 161.184 900.731 161.184 900.731C161.184 900.731 186.95 901.008 193.834 906.648Z" fill="#6C63FF"/>
        </g>
        <defs>
        <clipPath id="clip0_36_108">
        <rect width="696" height="926" fill="white"/>
        </clipPath>
        </defs>
      </svg>
      <div className='flex flex-row items-center justify-center w-[50vw] px-[5rem]'>
        <form noValidate name='Login Form' onSubmit={(event)=>handleSubmit(event)} className='flex flex-col gap-[var(--custom-gap)] bg-[var(--white-background)] p-[var(--card-padding)] px-[4.75rem] rounded-[var(--custom-radius)] w-[100%] min-w-[300px]'>
          <h1 className='w-[100%] text-center font-bold text-[2rem]' >Log In</h1>
          <div className='flex flex-col w-[100%]'>
            <label for='email' className='text-[var(--primary-color)] text-[1rem] leading-[2.4rem] font-semibold w-[100%]'>Email</label>
            <div className='flex flex-row items-center gap-[0.25rem] w-[100%] bg-[var(--tertiary-background)] rounded-[var(--custom-radius)] px-[1.1rem] pe-0'>
              <img src={EmailIcon}/>
              <input autoComplete='off' onChange={(event)=>handleEmailChange(event)} required id='email' type='email' tabIndex={0} placeholder='Enter your email address' className='focus:outline-none w-[100%] p-[var(--button-padding)] bg-[var(--tertiary-background)] rounded-[var(--custom-radius)] text-[#908E8E]'></input>
            </div>
            {emptyEmail && <sub className='leading-[1.2rem] text-red-400'>Pls provide your email</sub>}
            {invalidEmail && <sub className='leading-[1.2rem] text-red-400'>Pls provide a valid email</sub>}
            {usedEmail && <sub className='leading-[1.2rem] text-red-400'>Email already used, please provide another email</sub>}
          </div>
          <div className='flex flex-col w-[100%]'>
            <label for='password' className='text-[var(--primary-color)] text-[1rem] leading-[2.4rem] font-semibold'>Password</label>
            <div className='flex flex-row items-center gap-[0.25rem] w-[100%] bg-[var(--tertiary-background)] rounded-[var(--custom-radius)] px-[1.1rem] pe-0'>
              <img src={HashIcon}/>
              <input autoComplete='off' onChange={(event)=>handlePasswordChange(event)} required id='password' min={8} type='password' tabIndex={0} placeholder='Not less than 8 characters' className='focus:outline-none w-[100%] p-[var(--button-padding)] bg-[var(--tertiary-background)] rounded-[var(--custom-radius)] text-[#908E8E]'></input>
            </div>
            {emptyPassword && <sub className='leading-[1.2rem] text-red-400'>Pls provide your password</sub>}
            {invalidPassword && <sub className='leading-[1.2rem] text-red-400'>Pls provide password not less than least 8 characters</sub>}
          </div>
          <input type="submit" tabIndex={0} className='w-[100%] bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-semibold sm:p-[var(--button-padding)]' value="Log In" />
        </form>
      </div>
    </div>
  )
}

export default SignIn
