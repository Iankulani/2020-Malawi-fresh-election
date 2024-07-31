const { ipcRenderer } = require('electron');

document.getElementById('calculate').addEventListener('click', () => {
    const percent = 100;
    
    const totalPublishedCenters = parseInt(document.getElementById('totalPublishedCenters').value, 10);
    const totalRegisteredVotes = parseInt(document.getElementById('totalRegisteredVotes').value, 10);
    const totalVotesCast = parseInt(document.getElementById('totalVotesCast').value, 10);
    const nullAndVoid = parseInt(document.getElementById('nullAndVoid').value, 10);
    const totalValidVotes = parseInt(document.getElementById('totalValidVotes').value, 10);
    const totalValidVotesForLazarusChakwera = parseInt(document.getElementById('chakweraVotes').value, 10);
    const totalValidVotesForPeterKuwani = parseInt(document.getElementById('kuwaniVotes').value, 10);
    const totalValidVotesForArthurMuthalika = parseInt(document.getElementById('muthalikaVotes').value, 10);

    let resultHtml = '';

    // Determine the winner
    if (totalValidVotesForLazarusChakwera > totalValidVotes / 2.0) {
        resultHtml += "Congratulations Dr Lazarus Maccathy Chakwera, you're a winner of the 2020 election<br>";
    } else if (totalValidVotesForPeterKuwani > totalValidVotes / 2.0) {
        resultHtml += "Congratulations Peter Kuwani, you're a winner of the 2020 election<br>";
    } else if (totalValidVotesForArthurMuthalika > totalValidVotes / 2.0) {
        resultHtml += "Congratulations Professor Arthur Peter Muthalika, you're a winner of the 2020 election<br>";
    } else {
        resultHtml += "No majority winner was found. RUNOFF may be required<br>";
    }

    // Calculating percentage
    let percentage;

    // Total Votes Cast in percentage
    percentage = ((totalVotesCast / totalValidVotes) * percent).toFixed(2);
    resultHtml += "Total Votes Cast in percentage = " + percentage + "<br>";

    // Total Valid Votes for all candidates
    percentage = ((totalValidVotes / totalVotesCast) * percent).toFixed(2);
    resultHtml += "Total Valid Votes for all candidates in percentage = " + percentage + "<br>";

    // Total Null & Void votes
    percentage = ((nullAndVoid / totalValidVotes) * percent).toFixed(2);
    resultHtml += "Total Null & Void votes in percentage = " + percentage + "<br>";

    // Total Registered voters/turnout
    percentage = ((totalVotesCast / totalRegisteredVotes) * percent).toFixed(2);
    resultHtml += "Total Registered voters/turnout in percentage = " + percentage + "<br>";

    // Total Valid Votes for Dr Lazarus Chakwera
    percentage = ((totalValidVotesForLazarusChakwera / totalValidVotes) * percent).toFixed(2);
    resultHtml += "Total Valid Votes for Dr Lazarus Chakwera in percentage = " + percentage + "<br>";

    // Total Valid Votes for Peter Kuwani
    percentage = ((totalValidVotesForPeterKuwani / totalValidVotes) * percent).toFixed(2);
    resultHtml += "Total Valid Votes for Peter Kuwani in percentage = " + percentage + "<br>";

    // Total Valid Votes for Professor Muthalika
    percentage = ((totalValidVotesForArthurMuthalika / totalValidVotes) * percent).toFixed(2);
    resultHtml += "Total Valid Votes for Professor Muthalika in percentage = " + percentage + "<br>";

    document.getElementById('results').innerHTML = resultHtml;
});
