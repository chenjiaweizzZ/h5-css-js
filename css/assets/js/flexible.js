const htmlEl = document.documentElement
        function setRemUnit() {
            const htmlWidth = htmlEl.clientWidth
            const htmlFontSize = htmlWidth / 10
            htmlEl.style.fontSize = htmlFontSize + 'px'
        }
        setRemUnit()
        window.addEventListener("resize", setRemUnit)