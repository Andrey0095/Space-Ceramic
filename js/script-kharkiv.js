    'use strict';
    let multiItemSlider = (function () {
      return function (selector, config) {
        let
          _mainElement = document.querySelector(selector), // основный элемент блока
          _sliderWrapper = _mainElement.querySelector('.slider-kharkiv__wrapper'), // обертка для .slider-item
          _sliderItems = _mainElement.querySelectorAll('.slider-kharkiv__item'), // элементы (.slider-item)
          _sliderControls = _mainElement.querySelectorAll('.slider-kharkiv__control'), // элементы управления
          _sliderControlLeft = _mainElement.querySelector('.slider-kharkiv__control_left'), // кнопка "LEFT"
          _sliderControlRight = _mainElement.querySelector('.slider-kharkiv__control_right'), // кнопка "RIGHT"
          _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
          _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
          _positionLeftItem = 0, // позиция левого активного элемента
          _transform = 0, // значение транфсофрмации .slider_wrapper
          _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
          _items = []; // массив элементов
        // наполнение массива _items
        _sliderItems.forEach(function (item, index) {
          _items.push({ item: item, position: index, transform: 0 });
        });

        let position = {
          getMin: 0,
          getMax: _items.length - 1,
        }

        let _transformItem = function (direction) {
          if (direction === 'right') {
            if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
              return;
            }
            if (!_sliderControlLeft.classList.contains('slider-kharkiv__control_show')) {
              _sliderControlLeft.classList.add('slider-kharkiv__control_show');
            }
            if (_sliderControlRight.classList.contains('slider-kharkiv__control_show') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
              _sliderControlRight.classList.remove('slider-kharkiv__control_show');
            }
            _positionLeftItem++;
            _transform -= _step;
          }
          if (direction === 'left') {
            if (_positionLeftItem <= position.getMin) {
              return;
            }
            if (!_sliderControlRight.classList.contains('slider-kharkiv__control_show')) {
              _sliderControlRight.classList.add('slider-kharkiv__control_show');
            }
            if (_sliderControlLeft.classList.contains('slider-kharkiv__control_show') && _positionLeftItem - 1 <= position.getMin) {
              _sliderControlLeft.classList.remove('slider-kharkiv__control_show');
            }
            _positionLeftItem--;
            _transform += _step;
          }
          _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }

        // обработчик события click для кнопок "назад" и "вперед"
        let _controlClick = function (e) {
          if (e.target.classList.contains('slider-kharkiv__control')) {
            e.preventDefault();
            let direction = e.target.classList.contains('slider-kharkiv__control_right') ? 'right' : 'left';
            _transformItem(direction);
          }
        };

        let _setUpListeners = function () {
          // добавление к кнопкам "назад" и "вперед" обработчика _controlClick для события click
          _sliderControls.forEach(function (item) {
            item.addEventListener('click', _controlClick);
          });
        }

        // инициализация
        _setUpListeners();

        return {
          right: function () { // метод right
            _transformItem('right');
          },
          left: function () { // метод left
            _transformItem('left');
          }
        }
      }
    }());

    let slider = multiItemSlider('.slider-kharkiv')

  // *******************************Показ или Скрытие Слайдера Харькова START***************************
  const linkk = document.querySelector(".show-kharkiv");
  if (linkk){
  const displayNone = document.querySelector(".display-none");  
  
  linkk.addEventListener("click", function (evt) {
    evt.preventDefault();
    linkk.classList.add("display-none");
    displayNone.classList.remove("display-none");    
  });
  
  window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!displayNone.classList.contains("display-none")) {
      displayNone.classList.add("display-none");
      linkk.classList.remove("display-none");
    }
  }
  });
  };
// *******************************Показ или Скрытие Слайдера Харькова END***************************