const form = document.getElementById('discordForm');
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const tag = '#0000'; // Pevně daný kód tagu
    const message = document.getElementById('message').value;
    const timestamp = new Date().toISOString(); // Získání aktuálního času ve formátu ISO

    try {
        const response = await fetch('https://discord.com/api/webhooks/1249432622426488872/9S3HQYtSjPdeKV-0dR7QeP4-ZlsHJ3GLRZSvDBdDyamYQmimVH7jo8Eu-rZMKDNmKKbZ', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                embeds: [{
                    title: 'Nová zpráva',
                    description: `**Jméno:** ${name}${tag}\n**Zpráva:** ${message}`, // Jméno s tagem
                    color: 65280, // Zelená barva
                    timestamp: timestamp
                }]
            })
        });

        if (response.ok) {
            alert('Zpráva byla úspěšně odeslána na Discord!');
            form.reset();
        } else {
            alert('Něco se pokazilo. Zpráva nebyla odeslána.');
        }
    } catch (error) {
        console.error('Chyba při odesílání zprávy na Discord:', error);
        alert('Došlo k chybě při odesílání zprávy na Discord. Zkontrolujte konzoli pro více informací.');
    }
});