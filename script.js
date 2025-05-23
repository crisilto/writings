const poems = [
    {
        date: 'may 22th',
        title: '#1',
        text: `people come to my life
they swear they are comfortable in it
but i'm already standing at the door with a knife
waiting for them to leave
because that would be easier to bear`
    },
    {
        date: 'may 22th',
        title: '#2',
        text: `when i try to sleep  
and silence my mind  
the voices return  
louder than mine  
how can i rest  
if nothing is still  
how can i live  
if all i know is grief`
    },
    {
        date: 'may 22th',
        title: '#3',
        text: `you were the only one  
who saw my worth  
i know you were wrong  
since you are gone
how could you be right  
if no one else ever did  
you were just blind  
trying to make me feel whole  
in a world  
where i am the hole`
    },
    {
        date: 'may 22th',
        title: '#4',
        text: `when i see the mirror  
i don't recognize the reflection  
when i hear my voice  
i only feel rejection  
even air  
feels wrong in my chest  
how could someone like this  
deserve to be`
    },
    {
        date: 'may 22th',
        title: '#5',
        text: `i try  
but i can’t  
remember anything  
from when i was a child  
i hope this is a loop  
and soon i’ll forget  
who i became now
too`
    },
    {
        date: 'may 22th',
        title: '#6',
        text: `how can i think about a future  
when i’m still stuck in the past  
every day i remember  
the day i was born  
how no one asked  
and now  
i’m a shadow they forgot`
    }
]

let current = 0

function showPoem(index) {
    const container = document.getElementById('poem-container')
    const poem = poems[index]
    container.innerHTML = `
    <div id="poem-date">${poem.date}</div>
    <div id="poem-title">${poem.title}</div>
    <div id="poem-text">${poem.text}</div>
  `
}

function nextPoem() {
    current = (current + 1) % poems.length
    showPoem(current)
}

function prevPoem() {
    current = (current - 1 + poems.length) % poems.length
    showPoem(current)
}

window.onload = () => {
    showPoem(current)
}
