const videoPlayerUrl = 'http://localhost:4600/iframe.html?id=elements-vl-video-player--default&viewMode=story';

describe('story vl-video-player', () => {
    it('should contain a video player', () => {
        cy.visit(`${videoPlayerUrl}`)
        cy.getDataCy('video-player')
            .should('have.attr', 'data-vl-video-player-dressed', 'true')
    });
});
