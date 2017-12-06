import React, {Component} from 'react';
import {connect} from 'react-redux';

import Buttons from './components/Buttons';
import Greeting from './components/Greeting';
import Cancel from './components/Cancel';
import Politick from './components/Politick';
import Tablet from './components/Tablet';
import Congratulations from './components/Congratulations';
import Questions from './components/Questions.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			greetingOptions: {
				text: 'Хотите&купить недвижимость&в Краснодаре?'
			},
			cancelOptions: {
				text: [
					'Вы уверены, что попали на этот сайт ',
					'по ошибке, и что долшая зима',
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
						let selectors = document.styleSheets[0].cssRules;
						for (var i = 0; i < selectors.length; i++) {
							if (selectors[i].selectorText === '#root::before') {
								selectors[i].style.opacity = 0;
							}
						}
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
						className: 'button continueBtn',
						onclickFunction: function() {
							this.props.onShowPolitick('');
							this.props.onCreatePolitick(false);
						}.bind(this)
					},
					crossBtn: {
						text: 'Х',
						className: 'button crossBtn',
						onclickFunction: function() {
							this.props.onShowPolitick('');
							this.props.onCreatePolitick(false);
						}.bind(this)
					}
				}
			},
			congratulationsOption: {
				title_1: 'Замечательно!',
				text_1: 'Вы решили присоединиться к тем, кто ' +
					'уже купил недвижимость в Краснодаре',
				text_2: 'Вы находитесь в интерактивной системе ' +
					'содействия переездам граждан.',
				title_2: 'Ваши действия сейчас:',
				text_3: `Пройдите 6 простых шагов всего за 2 минуты`,
				text_4: `Получите 5 объектов напрямую от надежных застройщиков`,
				text_5: 'Нажмите <<Начать>>, что бы запустить процесс подбора.',
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
						let img = document.querySelector('.'+e.target.closest('div').classList[0]+'_image');
						img.style.opacity = 1;
					}.bind(this),
					unHoverFunction: function(e) {
						let img = document.querySelector('.'+e.target.closest('div').classList[0]+'_image');
						img.style.opacity = 0;
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
						let img = document.querySelector('.'+e.target.closest('div').classList[0]+'_image');
						img.style.opacity = 1;
					}.bind(this),
					unHoverFunction: function(e) {
						let img = document.querySelector('.'+e.target.closest('div').classList[0]+'_image');
						img.style.opacity = 0;
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
						let img = document.querySelector('.'+e.target.closest('div').classList[0]+'_image');
						img.style.opacity = 1;
					}.bind(this),
					unHoverFunction: function(e) {
						let img = document.querySelector('.'+e.target.closest('div').classList[0]+'_image');
						img.style.opacity = 0;
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
						let img = document.querySelector('.'+e.target.closest('div').classList[0]+'_image');
						img.style.opacity = 1;
					}.bind(this),
					unHoverFunction: function(e) {
						let img = document.querySelector('.'+e.target.closest('div').classList[0]+'_image');
						img.style.opacity = 0;
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
							let selectors = document.styleSheets[0].cssRules;
							for (let i = 0; i < selectors.length; i++) {
								if (selectors[i].selectorText === '#root::before') {
									selectors[i].style.opacity = 1;
								}
							}
						}.bind(this),
						unHoverFunction: function(e) {
							let selectors = document.styleSheets[0].cssRules;
							let cancelBlock = document.querySelector('.cancel');
							if (!cancelBlock) {
								for (let i = 0; i < selectors.length; i++) {
									if (selectors[i].selectorText === '#root::before') {
										selectors[i].style.opacity = 0;
									}
								}
							}
						}.bind(this)
					},
					{
						text: 'Да',
						className: 'ok_button',
						clickFunction: function () {
							this.props.onCreateGreeting(false);
							this.props.onCreateTablet(true);
							this.props.onCreateCongratulations(true);
							this.props.onShowButtons(this.state.buttonsOptions.congratulations);
							this.props.onShowTablet(this.state.tabletOptions.congratulations);
							this.props.onShowCongratulations(this.state.congratulationsOption);
						}.bind(this),
						hoverFunction: function(e) {
							let selectors = document.styleSheets[0].cssRules;
							for (var i = 0; i < selectors.length; i++) {
								if (selectors[i].selectorText === '#root::after') {
									selectors[i].style.opacity = 1;
								}
							}
						}.bind(this),
						unHoverFunction: function (e) {
							let selectors = document.styleSheets[0].cssRules;
							for (let i = 0; i < selectors.length; i++) {
								if (selectors[i].selectorText === '#root::after') {
									selectors[i].style.opacity = 0;
								}
							}
						}.bind(this)
					}
					
				],
				congratulations: [{
					text: 'Начать',
					className: 'start_questions',
					clickFunction: function() {
						this.props.onCreateQuestions(true);
						this.props.onCreateCongratulations(false);
						this.showQuestion('question_1');
					}.bind(this)
				}],
				questions: {
					question_1: [{
						text: 'Далее',
						className: 'next_button disabled',
						clickFunction: function(e){
							this.formSubmit('question_1');
							this.nextQuestionClick(e, 'question_2');
						}.bind(this)
					}],
					question_2: [
						{
							parentClassName: 'questions_button',
							text: 'Далее',
							className: 'next_button disabled',
							clickFunction: function(e){
								this.formSubmit('question_2');
								this.nextQuestionClick(e, 'question_3');
							}.bind(this)
						},{
							text: 'Назад',
							className: 'previous_button',
							clickFunction: function(e){
								this.previousQuestionClick('question_1');
							}.bind(this)
						}
					],
					question_3: [
						{
							parentClassName: 'questions_button',
							text: 'Далее',
							className: 'next_button disabled',
							clickFunction: function(e){
								this.formSubmit('question_3');
								this.nextQuestionClick(e, 'question_4');
							}.bind(this)
						},{
							text: 'Назад',
							className: 'previous_button',
							clickFunction: function(e){
								this.previousQuestionClick('question_2');
							}.bind(this)
						}
					],
					question_4: [
						{
							parentClassName: 'questions_button',
							text: 'Далее',
							className: 'next_button disabled',
							clickFunction: function(e){
								this.formSubmit('question_4');
								this.nextQuestionClick(e, 'question_5');
								if(window.rangeElement) {
									window.rangeElement = undefined;
								}
							}.bind(this)
						},{
							text: 'Назад',
							className: 'previous_button',
							clickFunction: function(e){
								this.previousQuestionClick('question_3');
							}.bind(this)
						}
					],
					question_5: [
						{
							parentClassName: 'questions_button',
							text: 'Далее',
							className: 'next_button',
							clickFunction: function(e){
								this.rangeSubmit('question_5');
								// window.rangeElement.updateOptions(this.state.questionsOptions.question_6.rangeOptions);
								window.rangeElement.destroy();
								window.rangeElement = undefined;
								this.nextQuestionClick(e, 'question_6');
							}.bind(this)
						},{
							text: 'Назад',
							className: 'previous_button',
							clickFunction: function(e){
								this.previousQuestionClick('question_4');
							}.bind(this)
						}
					],
					question_6: [
						{
							parentClassName: 'questions_button',
							text: 'Далее',
							className: 'next_button',
							clickFunction: function(e){
								this.rangeSubmit('question_6');
								// window.rangeElement.updateOptions(this.props.eventList.range.range_2);
								this.nextQuestionClick(e, 'question_7');
							}.bind(this)
						},{
							text: 'Назад',
							className: 'previous_button',
							clickFunction: function(e){
								// window.rangeElement.updateOptions(this.props.eventList.range.range_1);
								window.rangeElement.destroy();
								window.rangeElement = undefined;
								this.previousQuestionClick('question_5');
							}.bind(this)
						}
					]
				}
			},
			tabletOptions: {
				congratulations: {
					images: [
						{
							className: 'congratulation_image',
							src: 'stulya.jpg'
						}
					]
				},
				question_1: {
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
				question_5: {
					images: [
						{
							src: 'mao.jpg'
						},{
							src: 'point.png'
						}
					]
				},
				question_6: {
					images: [
						{
							src: 'mao.jpg'
						},{
							src: 'point.png'
						}
					]
				}
			}
		};
		this.showGreetingText = this.showGreetingText.bind(this);
		this.nextQuestionClick = this.nextQuestionClick.bind(this);
		this.previousQuestionClick = this.previousQuestionClick.bind(this);
	}

	nextQuestionClick(e, questionNum) {
		if(e.target.classList.contains('disabled')) {
			return;
		} else {
			this.showQuestion(questionNum);
		}
	}
	
	previousQuestionClick(questionNum) {
		this.showQuestion(questionNum);
	}
	
	componentDidMount() {
		window.addEventListener('load', function(){
			this.showGreetingText();
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
	
	showGreetingText() {
		let literNum = 0;
		let text = ['', '', ''];
		let textNum = 0;
		this.props.onCreateGreeting(true);
		let interval = setInterval(function () {
			if (literNum >= this.state.greetingOptions.text.length) {
				this.props.onCreateButtons(true);
				this.props.onShowButtons(this.state.buttonsOptions.greeting);
				clearInterval(interval)
			} else {
				if (this.state.greetingOptions.text[literNum] === '&') {
					textNum += 1;
					literNum += 1;
				} else {
					text[textNum] += this.state.greetingOptions.text[literNum];
					this.props.onShowGreeting(text);
					literNum += 1;
				}
			}
		}.bind(this), 50)
	}
	
	formChange(e, questionNum) {
		let questionForm = e.target.form;
		for(let i = 0; i < this.state.questionsOptions[questionNum].variants.length; i++) {
			if(questionForm[i].checked) {
				this.state.buttonsOptions.questions[questionNum][0].className = 'next_button';
				this.props.onShowButtons(this.state.buttonsOptions.questions[questionNum]);
				break;
			} else if (i === this.state.questionsOptions[questionNum].variants.length - 1 && !questionForm[i].checked) {
				this.state.buttonsOptions.questions[questionNum][0].className = 'next_button disabled';
				this.props.onShowButtons(this.state.buttonsOptions.questions[questionNum]);
			}
		}
	};
	
	formSubmit(questionNum) {
		let form = document.forms[0];
		let answers = [];
		for(let i = 0; i < this.state.questionsOptions[questionNum].variants.length; i++) {
			if(form[i].checked) {
				answers.push('checked')
			} else {
				answers.push('')
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
		this.props.onUpdateAnswers(result);
	}
	
	showQuestion(question) {
		this.props.onShowQuestions(this.state.questionsOptions[question]);
		this.props.onShowButtons(this.state.buttonsOptions.questions[question]);
		this.props.onShowTablet(this.state.tabletOptions[question]);
	}
	
	render() {
		let componentArray = [];
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
		onShowGreeting: (text) => {
			// dispatch({ type: 'SHOW_GREETING', payload: text });
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
		onUpdateRange: (rangeData) => {
			dispatch({type: 'UPDATE_RANGE', payload: rangeData});
		},
		onUpdateRangeData: (rangeData) => {
			dispatch({type: 'UPDATE_RANGE_DATA', payload: rangeData});
		},
		onUpdateAnswers: (answersData) => {
			dispatch({type: 'UPDATE_ANSWERS', payload: answersData});
		}
	})
)(App);
