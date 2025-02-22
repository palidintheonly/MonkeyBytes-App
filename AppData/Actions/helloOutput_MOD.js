// helloOutput_MOD.js

module.exports = {
    name: "helloOutput_MOD",
    section: "Messaging",

    subtitle: function(data) {
        return `Send "Hello" to ${data.channel}`;
    },

    fields: [
        {
            // Define the channel field
            name: "channel",
            type: "channel",
            placeholder: "Select the channel",
            default: "none"
        }
    ],

    html: function(isEvent, data) {
        return `
        <div>
            <div style="padding-top: 8px;">
                <span class="dbminputlabel">Channel</span><br>
                <select id="channel" class="round">
                    ${data.channels[0]}
                </select>
            </div>
        </div>`;
    },

    action: function(cache) {
        const data = cache.actions[cache.index];
        const channel = this.getChannel(data.channel, cache);

        if (channel && channel.send) {
            channel.send("Hello")
                .then(() => this.callNextAction(cache))
                .catch(err => this.displayError(data, cache, err));
        } else {
            this.callNextAction(cache);
        }
    },

    mod: function(DBM) {
        // Ensure the action is correctly registered
        DBM.Actions["helloOutput_MOD"] = this.action;
    },

    info: {
        name: "Hello Output",
        description: "Sends a Hello message to a specified channel",
        category: "Messaging",
        version: "1.0.0",
        author: "Your Name",
        contributors: [],
        website: "",
        patreon: "",
    }
};
