# functions

#### FunctionGetMsg

```javascript
let messages = []
async function getMessages(options = { limit: 100 }) {
            const msgs = await canal.messages.fetch(options);
            messages = messages.concat(Array.from(msgs.values()));

            if (msgs.size === 100)
                await getMessages({ limit: 100, before: msgs.last().id });
        }

        await getMessages();
```

#### NumberHex

```javascript
function toHex (number) { 
   return ((number)>>>0).toString(16) 
}

//exemplo:

toHex(16645900) // "fdff0c"
```

#### TimeFormatting

```javascript
duration(60000); // '00:01:00'
duration(100000); // '00:01:40'

function duration(ms) {
  const sec = Math.floor((ms / 1000) % 60).toString();
  const min = Math.floor((ms / (1000 * 60)) % 60).toString();
  const hrs = Math.floor(ms / (1000 * 60 * 60)).toString();

  return `${hrs.padStart(2, '0')}:${min.padStart(2, '0')}:${sec.padStart(2, '0')}`;
}
```
