import React, {Component} from 'react';
import {connect} from 'react-redux';

import Buttons from './components/Buttons';
import Greeting from './components/Greeting';
import Cancel from './components/Cancel';
import Politick from './components/Politick';
import Tablet from './components/Tablet';
import Congratulations from './components/Congratulations';
import Questions from './components/Questions';
import QuestionEnd from './components/QuestionEnd';
import Phone from './components/Phone';
import Mail from './components/Mail';
import LastStep from './components/LastStep';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			greetingOptions: {
				text_1: 'Хотите',
				text_2: 'купить недвижимость',
				text_3: 'в Краснодаре?'
			},
			cancelOptions: {
				text: [
					'Вы уверены, что попали на этот сайт ',
					'по ошибке, и что долгая зима',
					'лучше жаркого лета?',
					'Тогда просто закройте эту страницу!',
					`Или нажмите кнопку ${String.fromCharCode(171)}Продолжить${String.fromCharCode(187)}`
				],
				buttons: {
					continueBtn: {
						text: 'Продолжить',
						className: 'button continueBtn'
					},
					crossBtn: {
						text: String.fromCharCode(10060),
						className: 'button crossBtn'
					},
					onclickFunction: function() {
						this.props.onShowCancel('');
						this.props.onCreateCancel(false);
						document.getElementById('noBg').style.opacity = 0;
					}.bind(this)
				}
			},
			politickOptions: {
				text: [
					'СОГЛАШЕНИЕ О КОНФИДЕНЦИАЛЬНОСТИ',
					'Наша компания уважает Ваше право на неприкосновенность ' +
					'частной жизни и на защиту персональных данных. Персональная ' +
					'информация используется преимущественно для подготовки предложений ' +
					'в соответствии с Вашими потребностями и для связи с Вами. Мы ' +
					'гарантируем, что Ваша информация не будет продана или по иным ' +
					'основаниям передана третьим лицам, за исключением случаев, ' +
					'предусмотренных специальными законами, а Компания примет все ' +
					'имеющиеся в её распоряжении меры для обеспечения защищенности ' +
					'данных от неправомерного/несанкционированного доступа к ним. Однако, ' +
					'Вы также должны принимать меры, чтобы защитить её.',
					'Компания собирает персональную информацию, когда вы указываете её на ' +
					'сайте, в социальных сетях, либо указываете лично, а также в случае ' +
					'предоставления такой информации службой автоматического определения ' +
					'номера для входящих звонков, с целью выяснения ваших потребностей ' +
					'и/или для установления с вами контакта и формирования условий ' +
					'дальнейшего сотрудничества, в том числе направление писем, рассылок, ' +
					'уведомлений и проч.',
					'Предоставляя свою персональную информацию Вы принимаете условия ' +
					'данного Соглашения. Вы можете отказаться от получения писем ' +
					'рассылки и удалить из базы данных свои контактные данные в любой ' +
					'момент, кликнув на ссылку для отписки, присутствующую в каждом ' +
					'письме.',
					'В случае изменения данного Соглашения о конфиденциальности вы ' +
					'сможете прочитать об этих изменениях на этой странице или, в особых ' +
					'случаях, получить уведомление на свой e-mail.',
					'Для связи с администратором сайта по любым вопросам вы можете написать ' +
					'письмо на e-mail: _________________'
				],
				buttons: {
					continueBtn: {
						text: 'Продолжить',
						className: 'button continueBtn'
					},
					crossBtn: {
						text: String.fromCharCode(10060),
						className: 'button crossBtn'
					},
					onclickFunction: function() {
						this.props.onShowPolitick('');
						this.props.onCreatePolitick(false);
					}.bind(this)
				}
			},
			congratulationsOption: {
				title_1: 'Замечательно!',
				text_1: 'Вы решили присоединиться к тем, кто ' +
					'уже купил недвижимость в Краснодаре',
				text_2: 'Вы находитесь в интерактивной системе ' +
					'содействия переездам граждан.',
				title_2: 'Ваши действия сейчас:',
				text_3: `Пройдите 6 простых шагов всего за 2 минуты.`,
				text_4: `Получите 5 объектов напрямую от надежных застройщиков.`,
				text_5: `Нажмите ${String.fromCharCode(171)}Начать${String.fromCharCode(187)}, чтобы запустить процесс подбора.`,
				text_6: `${String.fromCharCode(10003)}`
			},
			questionsOptions: {
				question_1: {
					questionNum: 'question_1',
					title: 'Ответьте на несколько вопросов для более точного подбора недвижимости',
					formTitle: 'Сколько комнат Вам необходимо?',
					type: 'checkbox',
					variants: [
						{
							text: 'Студия'
						},
						{
							text: '1 комната'
						},
						{
							text: '2 комнаты'
						},
						{
							text: '3 комнаты и более'
						},
						{
							text: 'Дом'
						}
					],
					changeFunction: function(e) {
						this.formChange(e, 'question_1');
					}.bind(this),
					submitFunction: function(e) {
						this.formSubmit(e)
					}.bind(this),
					hoverFunction: function(e) {
						this.hideLastChange('question_1');
						let img = document.querySelector('.'+e.currentTarget.classList[0]+'_image');
						img.style.opacity = 1;
					}.bind(this),
					unHoverFunction: function(e) {
						let img = document.querySelector('.'+e.currentTarget.classList[0]+'_image');
						img.style.opacity = 0;
					},
					formUnHoverFunction: function() {
						this.showLastChange('question_1');
					}.bind(this)
				},
				question_2: {
					questionNum: 'question_2',
					formTitle: 'В каком году хотите заехать?',
					type: 'checkbox',
					variants: [
						{
							text: 'Прямо сейчас'
						},
						{
							text: '1 полугодие 2018 года'
						},
						{
							text: '2 полугодие 2018 года'
						},
						{
							text: 'В 2019 году и далее'
						}
					],
					changeFunction: function(e) {
						this.formChange(e, 'question_2');
					}.bind(this),
					submitFunction: function(e) {
						this.formSubmit(e)
					}.bind(this),
					hoverFunction: function(e) {
						this.hideLastChange('question_2');
						let img = document.querySelector('.'+e.currentTarget.classList[0]+'_image');
						img.style.opacity = 1;
					}.bind(this),
					unHoverFunction: function(e) {
						let img = document.querySelector('.'+e.currentTarget.classList[0]+'_image');
						img.style.opacity = 0;
					},
					formUnHoverFunction: function() {
						this.showLastChange('question_2');
					}.bind(this)
				},
				question_3: {
					questionNum: 'question_3',
					formTitle: 'В каком районе хотите жить?',
					type: 'checkbox',
					variants: [
						{
							text: 'Шумный, деловой'
						},
						{
							text: 'Тихий, спальный'
						},
						{
							text: 'Престижный'
						},
						{
							text: 'Экологичный пригород'
						}
					],
					changeFunction: function(e) {
						this.formChange(e, 'question_3');
					}.bind(this),
					submitFunction: function(e) {
						this.formSubmit(e)
					}.bind(this),
					hoverFunction: function(e) {
						this.hideLastChange('question_3');
						let img = document.querySelector('.'+e.currentTarget.classList[0]+'_image');
						img.style.opacity = 1;
					}.bind(this),
					unHoverFunction: function(e) {
						let img = document.querySelector('.'+e.currentTarget.classList[0]+'_image');
						img.style.opacity = 0;
					},
					formUnHoverFunction: function() {
						this.showLastChange('question_3');
					}.bind(this)
				},
				question_4: {
					questionNum: 'question_4',
					formTitle: 'Что должно быть рядом?',
					type: 'checkbox',
					variants: [
						{
							text: 'Школа'
						},
						{
							text: 'Детский сад'
						},
						{
							text: 'Остановки транспорта'
						},
						{
							text: 'Торговый центр'
						},
						{
							text: 'Парк'
						},
						{
							text: 'Река, озеро'
						}
					],
					changeFunction: function(e) {
						this.formChange(e, 'question_4');
					}.bind(this),
					submitFunction: function(e) {
						this.formSubmit(e)
					}.bind(this),
					hoverFunction: function(e) {
						this.hideLastChange('question_4');
						let img = document.querySelector('.'+e.currentTarget.classList[0]+'_image');
						img.style.opacity = 1;
					}.bind(this),
					unHoverFunction: function(e) {
						let img = document.querySelector('.'+e.currentTarget.classList[0]+'_image');
						img.style.opacity = 0;
					},
					formUnHoverFunction: function() {
						this.showLastChange('question_4');
					}.bind(this)
				},
				question_5: {
					questionNum: 'range_1',
					formTitle: 'Какая площадь Вам необходима?',
					type: 'range',
					measUnit: `м${String.fromCharCode(178)}`
				},
				question_6: {
					questionNum: 'range_2',
					formTitle: 'На какой бюджет ориентироваться?',
					type: 'range',
					measUnit: `млн.руб.`
				}
			},
			questionEndOptions: {
				title: 'Спасибо за участие в опросе!',
				text: `Нажмите кнопку ${String.fromCharCode(171)}Продолжить${String.fromCharCode(187)}, чтобы узнать результат.`,
				questionNum: 'question_end',
			},
			phoneOptions: {
				title: 'Система приступила к подбору вариантов.',
				text: 'Введите номер телефона, по которому Вам сообщат результат',
				changeFunction: function(e) {
					if(e.target.value.length === 18) {
						document.querySelector('.phone_button').classList.remove('disabled');
					} else {
						document.querySelector('.phone_button').classList.add('disabled');
					}
				}
			},
			mailOptions: {
				title: 'СПАСИБО! МЫ СВЯЖЕМСЯ С ВАМИ В ТЕЧЕНИЕ 20 МИНУТ!',
				ahtung: 'ВНИМАНИЕ!',
				text_1: 'ТАКЖЕ ВАМ ОТКРЫЛСЯ ДОСТУП К ИНСТРУКЦИИ',
				text_2: `${String.fromCharCode(171)}12 правил безопасной покупки недвижимости в новостройках Краснодара. Бесплатные плюшки от риэлтора.${String.fromCharCode(187)}`,
				text_3: 'КУДА ОТПРАВИТЬ ИНСТРУКЦИЮ?'
			},
			lastStep: {
				title: 'ОСТАЛСЯ ВСЕГО ОДИН ШАГ',
				text_1: 'ПЕРЕЙДИТЕ НА ПОЧТУ И ПОДТВЕРДИТЕ СВОЙ E-MAIL, ' +
					'ЧТОБЫ ВАША ИНСТРУКЦИЯ ПРИШЛА ТОЧНО ПО АДРЕСУ',
				text_2: 'Что нужно сделать прямо сейчас?',
				li_1: 'Перейдите в свой почтовый аккаунт. Ниже расположены кнопки почтовых сервисов.',
				li_2: 'Найдите письмо от Системы содействия переездам граждан',
				li_3: 'Перейдите по ссыдке длля подтверждения.',
				li_4: 'Дождитесь письма с Вашей ИНСТРУКЦИЕЙ.',
				links: [
					{
						src: 'https://mail.ru/',
						image: 'mailru'
					},{
						src: 'https://mail.yandex.ru/',
						image: 'yandex'
					},{
						src: 'https://mail.google.com',
						image: 'gmail'
					},{
						src: 'https://www.icloud.com/',
						image: 'icloud'
					}
				],
				text_3: 'Хотите быстро перейти в свою почту? Жмите на соответствующую картинку!',
				text_4: 'ВНИМАНИЕ! Если такое письмо не пришло в течении 5 минут, проверьте папку СПАМ! Обязательно!'
			},
			buttonsOptions: {
				greeting: [
					{
						text: 'Нет',
						className: 'cancel_button',
						clickFunction: function () {
							this.props.onCreateCancel(true);
							this.props.onShowCancel(this.state.cancelOptions);
						}.bind(this),
						hoverFunction: function() {
							let noBG = document.getElementById('noBg');
							noBG.style.opacity = 1;
						},
						unHoverFunction: function() {
							let cancelBlock = document.querySelector('.cancel');
							if (!cancelBlock) {
								let noBG = document.getElementById('noBg');
								noBG.style.opacity = 0;
							}
						}
					},
					{
						text: 'Да',
						className: 'ok_button',
						clickFunction: function () {
							document.querySelector('.greeting').style.opacity = 0;
							document.querySelector('.buttons').style.opacity = 0;
							this.props.onShowTablet(this.state.tabletOptions.congratulations);
							setTimeout(function(){
								this.props.onCreateGreeting(false);
								this.props.onShowButtons(this.state.buttonsOptions.congratulations);
								this.props.onCreateTablet(true);
								this.props.onCreateCongratulations(true);
								this.props.onShowCongratulations(this.state.congratulationsOption);
								setTimeout(function(){
									document.querySelector('.tablet').style.opacity = 1;
									document.querySelector('.congratulations').style.opacity = 1;
									document.querySelector('.buttons').style.opacity = 1;
								}, 50)
							}.bind(this), 250)
						}.bind(this),
						hoverFunction: function(e) {
							let noBG = document.getElementById('yesBg');
							noBG.style.opacity = 1;
						},
						unHoverFunction: function (e) {
							let noBG = document.getElementById('yesBg');
							noBG.style.opacity = 0;
						}
					}
				],
				congratulations: [{
					text: 'Начать',
					className: 'start_questions',
					clickFunction: function() {
						document.querySelector('.congratulations').style.opacity = 0;
						document.querySelector('.congratulations_image').style.opacity = 0;
						document.querySelector('.buttons').style.opacity = 0;
						setTimeout(function(){
							this.props.onCreateCongratulations(false);
							this.props.onCreateQuestions(true);
							this.showQuestion('question_1');
							setTimeout(function(){
								document.querySelector('.question').style.opacity = 1;
								document.querySelector('.buttons').style.opacity = 1;
							})
						}.bind(this), 300)
					}.bind(this)
				}],
				questions: {
					question_1: [{
						text: 'Далее',
						className: 'next_button disabled',
						clickFunction: function(e){
							this.showNextQuestion(e, 1);
						}.bind(this)
					}],
					question_2: [
						{
							parentClassName: 'questions_button',
							text: 'Далее',
							className: 'next_button disabled',
							clickFunction: function(e){
								this.showNextQuestion(e, 2);
							}.bind(this)
						},{
							text: 'Назад',
							className: 'previous_button',
							clickFunction: function(e){
								this.showPrewiousQuestion(2);
							}.bind(this)
						}
					],
					question_3: [
						{
							parentClassName: 'questions_button',
							text: 'Далее',
							className: 'next_button disabled',
							clickFunction: function(e){
								this.showNextQuestion(e, 3);
							}.bind(this)
						},{
							text: 'Назад',
							className: 'previous_button',
							clickFunction: function(e){
								this.showPrewiousQuestion(3);
							}.bind(this)
						}
					],
					question_4: [
						{
							parentClassName: 'questions_button',
							text: 'Далее',
							className: 'next_button disabled',
							clickFunction: function(e){
								this.showNextQuestion(e, 4);
							}.bind(this)
						},{
							text: 'Назад',
							className: 'previous_button',
							clickFunction: function(e){
								this.showPrewiousQuestion(4);
							}.bind(this)
						}
					],
					question_5: [
						{
							parentClassName: 'questions_button',
							text: 'Далее',
							className: 'next_button',
							clickFunction: function(e){
								this.showNextQuestion(e, 5);
							}.bind(this)
						},{
							text: 'Назад',
							className: 'previous_button',
							clickFunction: function(e){
								this.showPrewiousQuestion(5);
							}.bind(this)
						}
					],
					question_6: [
						{
							parentClassName: 'questions_button',
							text: 'Далее',
							className: 'next_button',
							clickFunction: function(e){
								document.querySelector('.question').style.opacity = 0;
								document.querySelector('.buttons').style.opacity = 0;
								setTimeout(function () {
									this.rangeSubmit('question_6');
									this.props.onCreateQuestions(false);
									this.props.onCreateQuestionEnd(true);
									this.props.onShowButtons(this.state.buttonsOptions.questionEnd);
									this.props.onShowTablet(this.state.tabletOptions.question_range);
									this.props.onShowQuestionEnd(this.state.questionEndOptions);
									setTimeout(function () {
										document.querySelector('.question_end').style.opacity = 1;
										document.querySelector('.buttons').style.opacity = 1;
									})
								}.bind(this), 300)
							}.bind(this)
						},{
							text: 'Назад',
							className: 'previous_button',
							clickFunction: function(e){
								this.showPrewiousQuestion(6);
							}.bind(this)
						}
					]
				},
				questionEnd: [{
					parentClassName: 'question_end_button',
					text: 'Продолжить',
					className: 'question_end_continue',
					clickFunction: function () {
						document.querySelector('.buttons').style.opacity = 0;
						document.querySelector('.question_end').style.opacity = 0;
						document.querySelector('.tablet').style.opacity = 0;
						setTimeout(function(){
							this.props.onCreateQuestionEnd(false);
							this.props.onCreateTablet(false);
							this.props.onCreatePhone(true);
							this.props.onShowButtons(this.state.buttonsOptions.phone);
							this.props.onShowPhone(this.state.phoneOptions);
							document.querySelector('.buttons').style.opacity = 1;
							document.querySelector('.phone').style.opacity = 1;
						}.bind(this), 300)
					}.bind(this)
				}],
				phone: [{
					parentClassName: 'phone_end_button',
					text: 'Получить подборку',
					className: 'phone_button disabled',
					clickFunction: function(e) {
						if(!e.target.classList.contains('disabled')) {
							document.querySelector('.phone').style.opacity = 0;
							document.querySelector('.buttons').style.opacity = 0;
							this.userDataSubmit('question_7');
							setTimeout(function(){
								this.props.onCreatePhone(false);
								this.props.onCreateMail(true);
								this.props.onShowMail(this.state.mailOptions);
								this.props.onShowButtons(this.state.buttonsOptions.mail);
								setTimeout(function(){
									document.querySelector('.mail').style.opacity = 1;
									document.querySelector('.buttons').style.opacity = 1;
								}, 50)
							}.bind(this), 300)
						}
					}.bind(this)
				}],
				mail: [{
					parentClassName: 'mail_end_button',
					text: 'Получить',
					className: 'mail_button',
					clickFunction: function() {
						document.querySelector('.mail').style.opacity = 0;
						document.querySelector('.buttons').style.opacity = 0;
						this.userDataSubmit('question_8');
						this.postData();
						setTimeout(function(){
							this.props.onCreateMail(false);
							this.props.onCreateButtons(false);
							this.props.onCreateLastStep(true);
							this.props.onShowLastStep(this.state.lastStep);
							setTimeout(function(){
								document.querySelector('.last_step').style.opacity = 1;
							}, 50)
						}.bind(this), 300)
					}.bind(this)
				}]
			},
			tabletOptions: {
				congratulations: {
					className: 'congratulations',
					src: 'stulya.jpg'
				},
				question_1: {
					questionNum: 1,
					className: 'questions',
					images: [
						{
							src: '03-01.jpg'
						},{
							src: '03-02.jpg'
						},{
							src: '03-03.jpg'
						},{
							src: '03-04.jpg'
						},{
							src: '03-05.jpg'
						}
					]
				},
				question_2: {
					questionNum: 2,
					className: 'questions',
					images: [
						{
							src: '04-01.jpg'
						},{
							src: '04-02.jpg'
						},{
							src: '04-03.jpg'
						},{
							src: '04-04.jpg'
						}
					]
				},
				question_3: {
					questionNum: 3,
					className: 'questions',
					images: [
						{
							src: '05-01.jpg'
						},{
							src: '05-02.jpg'
						},{
							src: '05-03.jpg'
						},{
							src: '05-04.jpg'
						}
					]
				},
				question_4: {
					questionNum: 4,
					className: 'questions',
					images: [
						{
							src: '06-01.jpg'
						},{
							src: '06-02.jpg'
						},{
							src: '06-03.jpg'
						},{
							src: '06-04.jpg'
						},{
							src: '06-05.jpg'
						},{
							src: '06-06.jpg'
						}
					]
				},
				question_range: {
					className: 'questions_range',
					image_map:'map.jpg',
					image_point: 'point.png',
					points_array: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2]
				}
			}
		};
		this.showQuestion = this.showQuestion.bind(this);
		this.showLastChange = this.showLastChange.bind(this);
		this.hideLastChange = this.hideLastChange.bind(this);
		this.showNextQuestion = this.showNextQuestion.bind(this);
		this.showPrewiousQuestion = this.showPrewiousQuestion.bind(this);
	}
	
	componentDidMount() {
		window.addEventListener('load', function(){
			this.props.onShowGreeting(this.state.greetingOptions);
			this.props.onCreateButtons(true);
			this.props.onShowButtons(this.state.buttonsOptions.greeting);
		}.bind(this));
	}

	componentDidUpdate(){
		if (this.props.eventList.questions.type === 'range' && !window.rangeElement) {
			let  noUiSlider =  window.noUiSlider;
			let range;
			if (this.props.eventList.questions.questionNum === 'range_1') {
				range = document.getElementById('range_1');
			} else if (this.props.eventList.questions.questionNum === 'range_2') {
				range = document.getElementById('range_2');
			}
			window.rangeElement = noUiSlider.create(range, this.props.eventList.range[this.props.eventList.questions.questionNum]);
			window.rangeElement.on('update', function(){
				let rangeData = window.rangeElement.get();
				for(let i = 0; i < rangeData.length; i++) {
					rangeData[i] = this.props.eventList.questions.questionNum === 'range_1' 
					? Number(rangeData[i]).toFixed(0) + '' 
					: Number(rangeData[i]).toFixed(1) + ''
				}
				let rangeName = this.props.eventList.questions.questionNum;
				this.props.onUpdateRangeData({name: rangeName, data: rangeData});
			}.bind(this));
		}
	}
	
	formChange(e, questionNum) {
		let questionForm = e.target.form;
		if (e.target.checked) {
			let changeData = {
				name: questionNum,
				data: e.target.id
			};
			this.hideLastChange(questionNum);
			this.props.onUpdateLastChange(changeData);
		}
		for(let i = 0; i < this.state.questionsOptions[questionNum].variants.length; i++) {
			if(questionForm[i].checked) {
				this.state.buttonsOptions.questions[questionNum][0].className = 'next_button';
				this.props.onShowButtons(this.state.buttonsOptions.questions[questionNum]);
				break;
			} else if (i === this.state.questionsOptions[questionNum].variants.length - 1 && !questionForm[i].checked) {
				this.state.buttonsOptions.questions[questionNum][0].className = 'next_button disabled';
				this.props.onShowButtons(this.state.buttonsOptions.questions[questionNum]);
				this.props.onUpdateLastChange({name: questionNum, data: ''});
			}
		}
	};
	
	showLastChange(questionNum) {
		let lastChange = this.props.eventList.lastChange[questionNum];
		if(lastChange !== '') {
			let img = document.querySelector('.'+lastChange+'_image');
			img.style.opacity = 1;
		}
	}
	
	hideLastChange(questionNum) {
		let lastChange = this.props.eventList.lastChange[questionNum];
		if(lastChange !== '') {
			let img = document.querySelector('.'+lastChange+'_image');
			img.style.opacity = 0;
		}
	}
	
	formSubmit(questionNum) {
		let form = document.forms[0];
		let answers = {
			checks: [],
			values: []
		};
		for(let i = 0; i < this.state.questionsOptions[questionNum].variants.length; i++) {
			if(form[i].checked) {
				answers.checks.push('checked');
				answers.values.push(form[i].value);
			} else {
				answers.checks.push('')
			}
		}
		let result = {
			name: questionNum,
			answers: answers
		};
		this.props.onUpdateAnswers(result);
	}
	
	rangeSubmit(questionNum) {
		let answers = window.rangeElement.get();
		let result = {
			name: questionNum,
			answers: answers
		};
		this.props.onUpdateRanges(result);
	}
	
	userDataSubmit(dataName) {
		let userData = document.getElementsByTagName('input')[0].value;
		let result = {
			name: dataName,
			answers: userData
		};
		this.props.onUpdateUserData(result);
	}
	
	showQuestion(question) {
		this.props.onShowQuestions(this.state.questionsOptions[question]);
		this.props.onShowButtons(this.state.buttonsOptions.questions[question]);
		if(question === 'question_5' || question === 'question_6') {
			this.props.onShowTablet(this.state.tabletOptions.question_range);
		} else {
			this.props.onShowTablet(this.state.tabletOptions[question]);
		}
	}

	showNextQuestion(e, questionNum) {
		if(e.target.classList.contains('disabled')) {
			return;
		} else {
			document.querySelector('.question').style.opacity = 0;
			document.querySelector('.buttons').style.opacity = 0;
			if(questionNum <= 4) {
				this.hideLastChange(`question_${questionNum}`);
			}
			setTimeout(function () {
				if (questionNum <= 4) {
					this.formSubmit(`question_${questionNum}`);
				} else {
					this.rangeSubmit(`question_${questionNum}`);
				}
				if (questionNum === 4 && window.rangeElement) {
					window.rangeElement = undefined;
				} else if (questionNum === 5) {
					window.rangeElement.destroy();
					window.rangeElement = undefined;
				}
				this.showQuestion(`question_${questionNum + 1}`);
				setTimeout(function () {
					document.querySelector('.question').style.opacity = 1;
					document.querySelector('.buttons').style.opacity = 1;
					if(questionNum < 4) {
						this.showLastChange(`question_${questionNum + 1}`);
					}
				}.bind(this), 50)
			}.bind(this), 300)
		}
	}
	
	showPrewiousQuestion(questionNum) {
		document.querySelector('.question').style.opacity = 0;
		document.querySelector('.buttons').style.opacity = 0;
		if (questionNum <= 4) {
			this.hideLastChange(`question_${questionNum}`);
			this.formSubmit(`question_${questionNum}`);
		} else {
			this.rangeSubmit(`question_${questionNum}`);
		}
		setTimeout(function(){
			this.showQuestion(`question_${questionNum - 1}`);
			setTimeout(function(){
				document.querySelector('.question').style.opacity = 1;
				document.querySelector('.buttons').style.opacity = 1;
				if(questionNum <= 5) {
					this.showLastChange(`question_${questionNum - 1}`);
				}
			}.bind(this), 50)
		}.bind(this), 300)
	}

	postData() {
		let data = this.props.eventList.answers;
		let result = [{
			rooms_kount: data.question_1.values,
			dead_line: data.question_2.values,
			city_district: data.question_3.values,
			beside_home: data.question_4.values,
			area: {
				from: data.question_5[0],
				to: data.question_5[1]
			},
			price: {
				from: data.question_6[0],
				to: data.question_6[1]
			},
			phone: data.question_7,
			eMail: data.question_8
		}];
		
		let res = JSON.stringify(result);
		
		let x = new XMLHttpRequest();
		x.open("POST", "./mail.php", true);
		x.onload = function () {
			if (!x.responseText) {
				return;
			} else {
				console.log(x.responseText)
			}
		};
		x.send(res);
	}
	
	render() {
		let componentArray = [];
		let noBg = <div id="noBg" key="noBg"> </div>;
		let yesBg = <div id="yesBg" key="yesBg"> </div>;
		let logo = <div id="logo" key="logo"> </div>;
		let politickLink = <p
			key="politickLink"
			onClick={ function() {
				this.props.onCreatePolitick(true);
				this.props.onShowPolitick(this.state.politickOptions);
				return false;
			}.bind(this)}
			className="politickLink"
		>
			Политика конфиденциальности
		</p>
		componentArray.push(noBg);
		componentArray.push(yesBg);
		componentArray.push(logo);
		if (this.props.eventList.flags.greeting) {
			componentArray.push(<Greeting key="greeting"/>);
		}
		if (this.props.eventList.flags.cancel) {
			componentArray.push(<Cancel key="cancel"/>);
		}
		if (this.props.eventList.flags.politick) {
			componentArray.push(<Politick key="politick"/>);
		}
		if (this.props.eventList.flags.tablet) {
			componentArray.push(<Tablet key="tablet"/>);
		}
		if (this.props.eventList.flags.congratulations) {
			componentArray.push(<Congratulations key="congratulations"/>);
		}
		if (this.props.eventList.flags.questions) {
			componentArray.push(<Questions key="questions"/>);
		}
		if (this.props.eventList.flags.questionEnd) {
			componentArray.push(<QuestionEnd key="questionEnd"/>);
		}
		if (this.props.eventList.flags.phone) {
			componentArray.push(<Phone key="phone"/>);
		}
		if (this.props.eventList.flags.mail) {
			componentArray.push(<Mail key="mail"/>);
		}
		if (this.props.eventList.flags.lastStep) {
			componentArray.push(<LastStep key="lastStep"/>);
		}
		if (this.props.eventList.flags.buttons) {
			componentArray.push(<Buttons key="buttons"/>);
		}
		componentArray.push(politickLink);
		return (
			<div className="container">
				{componentArray}
			</div>
		)
	}
}

export default connect(
	state => ({
		eventList: state
	}),
	dispatch => ({
		onCreateGreeting: (flag) => {
			dispatch({type: 'CREATE_GREETING', payload: flag});
		},
		onCreateButtons: (flag) => {
			dispatch({type: 'CREATE_BUTTONS', payload: flag});
		},
		onCreateCancel: (flag) => {
			dispatch({type: 'CREATE_CANCEL', payload: flag});
		},
		onCreatePolitick: (flag) => {
			dispatch({type: 'CREATE_POLITICK', payload: flag});
		},
		onCreateTablet: (flag) => {
			dispatch({type: 'CREATE_TABLET', payload: flag});
		},
		onCreateQuestions: (flag) => {
			dispatch({type: 'CREATE_QUESTIONS', payload: flag});
		},
		onCreateCongratulations: (flag) => {
			dispatch({type: 'CREATE_CONGRATULATIONS', payload: flag});
		},
		onCreateQuestionEnd: (flag) => {
			dispatch({type: 'CREATE_QUESTION_END', payload: flag});
		},
		onCreatePhone: (flag) => {
			dispatch({type: 'CREATE_PHONE', payload: flag});
		},
		onCreateMail: (flag) => {
			dispatch({type: 'CREATE_MAIL', payload: flag});
		},
		onCreateLastStep: (flag) => {
			dispatch({type: 'CREATE_LAST_STEP', payload: flag});
		},
		onShowGreeting: (text) => {
			dispatch({type: 'SHOW_GREETING', payload: text});
		},
		onShowButtons: (buttonsOption) => {
			dispatch({type: 'SHOW_BUTTONS', payload: buttonsOption});
		},
		onShowCancel: (cancelOption) => {
			dispatch({type: 'SHOW_CANCEL', payload: cancelOption});
		},
		onShowPolitick: (politicOption) => {
			dispatch({type: 'SHOW_POLITICK', payload: politicOption});
		},
		onShowCongratulations: (congratulationsOption) => {
			dispatch({type: 'SHOW_CONGRATULATIONS', payload: congratulationsOption});
		},
		onShowQuestions: (questionOption) => {
			dispatch({type: 'SHOW_QUESTIONS', payload: questionOption});
		},
		onShowTablet: (tabletOption) => {
			dispatch({type: 'SHOW_TABLET', payload: tabletOption});
		},
		onShowQuestionEnd: (questionEndData) => {
			dispatch({type: 'SHOW_QUESTION_END', payload: questionEndData});
		},
		onShowPhone: (phoneData) => {
			dispatch({type: 'SHOW_PHONE', payload: phoneData});
		},
		onShowMail: (mailData) => {
			dispatch({type: 'SHOW_MAIL', payload: mailData});
		},
		onShowLastStep: (lsData) => {
			dispatch({type: 'SHOW_LAST_STEP', payload: lsData});
		},
		onUpdateRangeData: (rangeData) => {
			dispatch({type: 'UPDATE_RANGE_DATA', payload: rangeData});
		},
		onUpdateAnswers: (answersData) => {
			dispatch({type: 'UPDATE_ANSWERS', payload: answersData});
		},
		onUpdateRanges: (answersData) => {
			dispatch({type: 'UPDATE_RANGES', payload: answersData});
		},
		onUpdateUserData: (answersData) => {
			dispatch({type: 'UPDATE_USER_DATA', payload: answersData});
		},
		onUpdateLastChange: (changeData) => {
			dispatch({type: 'UPDATE_LAST_CHANGE', payload: changeData});
		}
	})
)(App);
