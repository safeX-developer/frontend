class ConfiqScript{
    constructor(){
        this.username = 'U'
        this.address = "0x"
    }
      // Function to truncate wallet address
   truncateAddress(address){
    if (!address) return '';
    return `${address.substring(0, 10)}....${address.substring(address.length - 8)}`;
  };

  // Function to get the first letter of username
   getProfileInitial(user){
    if (user?.username) {
      return user.username.charAt(0).toUpperCase();
    }
    return 'U'; // Default if no username
  };
}

const confiq = new ConfiqScript()
export default confiq