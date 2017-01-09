var vm = new Vue({
    el: '#app',
    data: {
        events: [
            {
                date: '2017-01-10',
                description: 'Ate lunch.',
                comments: 2
            },
            {
                date: '2017-01-11',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                comments: 3
            },
            {
                date: '2017-01-11',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                comments: 10
            },
            {
                date: '2017-01-13',
                description: 'Lorem Ipsume has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.',
                comments: 40
            }
        ],
        addNewEvent: false,
        date: '',
        description: '',
        comments: 0
    },
    methods: {
        openEvent: function(){
            this.addNewEvent = !this.addNewEvent;
        },
        addEvent: function(){
            if(this.date == ''){
                alert('Please enter a date for this event.');
            }else if(this.description == ''){
                alert('Please enter a description for this event.');
            }else{
                this.events.push({
                date: this.date,
                description: this.description,
                comments: this.comments
                });
                alert('Event successfully added.');
            }
        },
        deleteEvent: function(){
            if(this.events.length <= 0){
                alert('No more events to remove.');
            }else{
                this.events.pop();
                alert('Last event removed.');
            }
        }
    }
})