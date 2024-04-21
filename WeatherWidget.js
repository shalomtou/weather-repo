var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var WeatherWidget = /** @class */ (function () {
    function WeatherWidget(divId) {
        this.apiKey = '5cbf0a4aca94419eb5a120540241004';
        this.divId = divId;
    }
    WeatherWidget.prototype.render = function () {
        return __awaiter(this, void 0, void 0, function () {
            var divElement, container, handleSubmit, handleKeyPress, style;
            var _this = this;
            return __generator(this, function (_a) {
                divElement = document.getElementById(this.divId) || document.body;
                if (!divElement) {
                    console.error("Div element not found.");
                    return [2 /*return*/];
                }
                container = document.createElement("div");
                container.classList.add("weather-widget-container");
                container.innerHTML = "\n      <div class=\"input-container\">\n        <input type=\"text\" id=\"locationInput\" class=\"input-field\" placeholder=\"Enter city or coordinates\">\n        <button id=\"submitBtn\" class=\"submit-btn\">Submit</button>\n      </div>\n      <div id=\"weatherContainer\" class=\"weather-container\"></div>\n    ";
                this.locationInput = container.querySelector("#locationInput");
                this.submitBtn = container.querySelector("#submitBtn");
                this.weatherContainer = container.querySelector("#weatherContainer");
                handleSubmit = function () {
                    _this.fetchWeather();
                };
                handleKeyPress = function (event) {
                    if (event.key === "Enter") {
                        handleSubmit();
                    }
                };
                if (this.submitBtn) {
                    this.submitBtn.addEventListener("click", handleSubmit);
                }
                if (this.locationInput) {
                    this.locationInput.addEventListener("keydown", handleKeyPress);
                }
                divElement.appendChild(container);
                style = document.createElement("style");
                style.textContent = "\n      * {\n        font-family:monospace;\n      }\n\n      .weather-widget-container {\n        border: 1px solid #ccc;\n        border-radius: 5px;\n        padding: 10px;\n        max-width: 300px;\n        margin: 0 auto;\n      }\n\n      .input-container {\n        display:flex;\n        justify-content:center;\n        align-items:baseline\n      }\n\n      .input-field {\n        width: calc(100% - 70px);\n        padding: 5px;\n        margin-bottom: 10px;\n      }\n\n      .submit-btn {\n        width: 60px;\n        height:auto;\n        padding: 5px;\n        margin-left: 10px;\n        cursor: pointer;\n        background-color: #007bff;\n        color: #fff;\n        border: none;\n        border-radius: 5px;\n      }\n\n      .weather-container {\n        margin-top: 10px;\n      }\n    ";
                document.head.appendChild(style);
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    WeatherWidget.prototype.fetchWeather = function () {
        return __awaiter(this, void 0, void 0, function () {
            var location, days, encodedUrl, response, data, countryName, cityName, weatherData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.locationInput || !this.locationInput.value) {
                            return [2 /*return*/];
                        }
                        location = this.locationInput.value;
                        days = 14;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        this.locationInput.value = "Loading...";
                        this.weatherContainer.innerHTML = "<div>...</div>";
                        encodedUrl = encodeURIComponent("https://api.weatherapi.com/v1/forecast.json?key=".concat(this.apiKey, "&q=").concat(location, "&days=").concat(days));
                        return [4 /*yield*/, fetch("https://proxy-server-fawn-six.vercel.app/proxy?url=".concat(encodedUrl))];
                    case 2:
                        response = _a.sent();
                        if (!response.ok) {
                            console.error("Error fetching weather data:", response.statusText);
                            this.showError("Error fetching weather data:" + response.statusText);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = _a.sent();
                        countryName = data.location.country;
                        cityName = data.location.name;
                        weatherData = this.parseWeatherData(data);
                        this.displayWeather(weatherData, countryName, cityName);
                        return [3 /*break*/, 6];
                    case 4:
                        error_1 = _a.sent();
                        console.error("Error fetching weather data:", error_1);
                        this.showError("Error fetching weather data");
                        return [3 /*break*/, 6];
                    case 5:
                        this.locationInput.value = null;
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    WeatherWidget.prototype.parseWeatherData = function (data) {
        var weatherData = [];
        for (var _i = 0, _a = data.forecast.forecastday; _i < _a.length; _i++) {
            var day = _a[_i];
            weatherData.push({ date: day.date, temperature: day.day.avgtemp_c });
        }
        return weatherData;
    };
    WeatherWidget.prototype.displayWeather = function (weatherData, country, city) {
        if (!this.weatherContainer) {
            console.error("Weather container not found.");
            return;
        }
        var daysOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        var averageTemperatures = {};
        weatherData.forEach(function (weather) {
            var date = new Date(weather.date);
            var dayOfWeek = daysOfWeek[date.getDay()];
            averageTemperatures[dayOfWeek] = __spreadArray(__spreadArray([], (averageTemperatures[dayOfWeek] || []), true), [
                weather.temperature,
            ], false);
        });
        var formattedTemperatures = Object.entries(averageTemperatures).map(function (_a) {
            var dayOfWeek = _a[0], temperatures = _a[1];
            var averageTemperature = temperatures.reduce(function (acc, curr) { return acc + curr; }, 0) /
                temperatures.length;
            return "\n          <div class=\"weather-day\">\n            <div class=\"day\">".concat(dayOfWeek, "</div>\n            <div class=\"temperature\">").concat(averageTemperature.toFixed(1), "\u00B0C</div>\n          </div>\n        ");
        });
        this.weatherContainer.innerHTML = "\n      <div class=\"location\">\n        <span class=\"country\">".concat(country, "</span>\n        <span class=\"city\">").concat(city, "</span>\n      </div>\n      <div class=\"weather-days\">").concat(formattedTemperatures.join(""), "</div>\n    ");
        var style = document.createElement("style");
        style.textContent = "\n     .weather-day {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 5px 0;\n      border-bottom: 1px solid #ccc;\n      }\n      \n      .day {\n        flex: 1;\n      }\n      \n      .temperature {\n        flex: 1;\n        text-align: right;\n      }\n      \n      .location {\n        font-size: 1.4rem;\n        color: #333;\n        margin-bottom: 10px;\n      }\n    \n      .country {\n        font-weight: bold;\n        margin-right: 5px;\n      }\n    \n      .city {\n        color: #333; /* Black color for city */\n        font-size: 1rem;\n      }\n      \n      .weather-days {\n        margin-top: 10px;\n      }\n     ";
        // Append the style to the document's head
        document.head.appendChild(style);
    };
    WeatherWidget.prototype.showError = function (message) {
        if (!this.weatherContainer) {
            console.error("Weather container not found.");
            return;
        }
        this.weatherContainer.innerHTML = "<div class=\"error\">".concat(message, "</div>");
    };
    return WeatherWidget;
}());
