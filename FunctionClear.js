let messages = []
async function getMessages(options = { limit: 100 }) {
            const msgs = await canal.messages.fetch(options);
            messages = messages.concat(Array.from(msgs.values()));

            if (msgs.size === 100)
                await getMessages({ limit: 100, before: msgs.last().id });
        }

        await getMessages();
