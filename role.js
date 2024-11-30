client.on('guildMemberAdd', (member) => {
    const roleId = 'ROLE_ID_HERE'; // Type Your Role ID Here
    const role = member.guild.roles.cache.get(roleId);

    if (role) {
        member.roles.add(role).catch(console.error);
    } else {
        console.error('Role not found.');
    }
});
