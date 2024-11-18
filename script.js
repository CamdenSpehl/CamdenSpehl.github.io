// Icons as SVG paths
const ICONS = {
    home: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
    search: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>',
    user: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
    message: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
    plus: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>',
    'image-plus': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path><line x1="16" y1="5" x2="22" y2="5"></line><line x1="19" y1="2" x2="19" y2="8"></line><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>',
    image: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>',
    heart: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>',
    'heart-filled': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>',
    comment: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>',
    share: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>',
    send: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>',
    zap: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
    more: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>',
    'shield-check': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>',
    'eye': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
    'eye-off': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" y1="2" x2="22" y2="22"></line></svg>',
    'log-out': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>',
    'flag': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',
    'alert-triangle': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    'help-circle': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
    'chevron-down': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>'
};

// Initialize state
let state = {
    posts: [
        {
            id: 1,
            title: 'Latest Developments in Technology',
            type: 'Breaking',
            author: 'Anonymous',
            content: 'This is a breaking news story about recent developments in technology...',
            likes: 15,
            reports: [],
            reportCount: 0,
            comments: [
                { author: 'Jane Doe', content: 'This is very interesting!', timestamp: new Date() },
                { author: 'Anonymous', content: 'Great coverage!', timestamp: new Date() }
            ],
            timestamp: new Date(),
            showComments: false
        },
        {
            id: 2,
            title: 'The State of Privacy in Social Media',
            type: 'Opinion',
            author: 'John Doe',
            content: 'Here\'s my take on the current state of privacy in social media...',
            likes: 8,
            reports: [],
            reportCount: 0,
            comments: [],
            timestamp: new Date()
        }
    ],
    chats: [
        { name: 'John Doe', preview: 'Latest message preview here...', timestamp: new Date() },
        { name: 'Jane Doe', preview: 'Another message preview...', timestamp: new Date() },
        { name: 'Anonymous User', preview: 'Encrypted message...', timestamp: new Date() }
    ]
};

state.user = {
    name: 'Anonymous User',
    sessionToken: 'sess_' + Math.random().toString(36).substr(2, 9),
    accountToken: 'acc_' + Math.random().toString(36).substr(2, 9),
    isTokenVisible: false
};

// Handle icon initialization
function initializeIcons() {
    document.querySelectorAll('[data-icon]').forEach(el => {
        const iconName = el.getAttribute('data-icon');
        if (ICONS[iconName]) {
            el.innerHTML = ICONS[iconName];
        }
    });
}

// Navigation
function showPage(pageId) {
    // Hide all pages and navbars
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.querySelectorAll('.navbar').forEach(nav => {
        nav.classList.remove('active');
    });
    document.querySelectorAll('.nav-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected page and its navbar
    document.getElementById(pageId).classList.add('active');
    document.getElementById(pageId.replace('page', 'nav')).classList.add('active');
    event.currentTarget?.classList.add('active');
    
    if (pageId === 'home-page') renderPosts();
    if (pageId === 'messages-page') renderChats();
}

// UI Feedback
function showMessage(message, isError = false) {
    const messageEl = document.getElementById('status-message');
    messageEl.textContent = message;
    messageEl.style.display = 'block';
    messageEl.className = `status-message ${isError ? 'error-message' : ''}`;
    
    setTimeout(() => {
        messageEl.style.display = 'none';
    }, 3000);
}

function getPostTypeIcon(type) {
    switch (type) {
        case 'Breaking':
            return ICONS.zap;
        case 'Opinion':
            return ICONS.message;
        default:
            return ICONS.image;
    }
}

function initializeProfile() {
    // Set initial values
    document.getElementById('display-name').value = state.user.name;
    document.getElementById('session-token').value = state.user.sessionToken;
    document.getElementById('account-token').value = state.user.accountToken;
    
    // Initialize icons
    document.querySelectorAll('.eye-button').forEach(button => {
        button.innerHTML = ICONS['eye-off'];
    });
    
    const signOutButton = document.querySelector('.sign-out-button');
    signOutButton.innerHTML = `${ICONS['log-out']} Sign Out`;
}

function toggleTokenVisibility(elementId) {
    const input = document.getElementById(elementId);
    const button = input.nextElementSibling;
    
    if (input.type === 'password') {
        input.type = 'text';
        button.innerHTML = ICONS.eye;
    } else {
        input.type = 'password';
        button.innerHTML = ICONS['eye-off'];
    }
}

function addSourceLink() {
    const sourceLinks = document.getElementById('source-links');
    const newLink = document.createElement('div');
    newLink.className = 'source-link';
    newLink.innerHTML = `
        <input type="url" placeholder="Enter URL to contradicting evidence">
        <button onclick="this.parentElement.remove()" title="Remove source">
            Remove
        </button>
    `;
    sourceLinks.appendChild(newLink);
}

function submitReport() {
    const postIndex = document.getElementById('report-modal').getAttribute('data-post-index');
    const links = Array.from(document.querySelectorAll('.source-link input')).map(input => input.value);
    const details = document.getElementById('report-details').value;
    
    if (!links[0] && !details) {
        showMessage('Please provide at least one source or explanation', true);
        return;
    }
    
    // In a real app, this would send to a backend
    console.log('Report submitted:', {
        postIndex,
        links: links.filter(Boolean),
        details
    });
    
    showMessage('Report submitted for review. Thank you for helping maintain accuracy!');
    closeReportModal();
}

function closeReportModal() {
    const modal = document.getElementById('report-modal');
    modal.style.display = 'none';
    
    // Reset form
    document.getElementById('source-links').innerHTML = `
        <div class="source-link">
            <input type="url" placeholder="Enter URL to contradicting evidence">
            <button onclick="this.parentElement.remove()" title="Remove source">
                Remove
            </button>
        </div>
    `;
    document.getElementById('report-details').value = '';
}

function reportPost(postIndex) {
    const modal = document.getElementById('report-modal');
    modal.style.display = 'flex';
    modal.setAttribute('data-post-index', postIndex);
    
    // Update report count in tab
    const post = state.posts[postIndex];
    document.querySelector('.report-count').textContent = post.reports.length;
    
    // Render existing reports
    const reportsList = document.querySelector('.reports-list');
    reportsList.innerHTML = post.reports.map(report => `
        <div class="report-item">
            <div class="report-metadata">
                <span class="report-author">${report.author}</span>
                <span class="report-date">${report.date.toLocaleDateString()}</span>
            </div>
            <div class="report-sources">
                ${report.sources.map(source => `
                    <a href="${source}" target="_blank" rel="noopener noreferrer" class="source-link">
                        Source
                    </a>
                `).join('')}
            </div>
            <p class="report-details">${report.details}</p>
        </div>
    `).join('') || '<p class="text-center text-secondary">No reports yet</p>';
    
    // Show the view reports tab by default
    switchTab('view-reports');
}

function addSourceLink() {
    const sourceLinks = document.getElementById('source-links');
    const newLink = document.createElement('div');
    newLink.className = 'source-link';
    newLink.innerHTML = `
        <input type="url" placeholder="Enter URL to contradicting evidence">
        <button onclick="this.parentElement.remove()">Remove</button>
    `;
    sourceLinks.appendChild(newLink);
}

function submitReport() {
    const postIndex = document.getElementById('report-modal').getAttribute('data-post-index');
    const links = Array.from(document.querySelectorAll('.source-link input')).map(input => input.value);
    const details = document.getElementById('report-details').value;
    
    if (!links[0] && !details) {
        showMessage('Please provide at least one source or explanation', true);
        return;
    }
    
    const newReport = {
        author: state.user.name,
        date: new Date(),
        sources: links.filter(Boolean),
        details: details
    };
    
    if (!state.posts[postIndex].reports) {
        state.posts[postIndex].reports = [];
    }
    
    state.posts[postIndex].reports.push(newReport);
    state.posts[postIndex].reportCount = state.posts[postIndex].reports.length;
    
    showMessage('Report submitted for review. Thank you for helping maintain accuracy!');
    closeReportModal();
    renderPosts();
}

function closeReportModal() {
    document.getElementById('report-modal').style.display = 'none';
}

function toggleTokenVisibility(elementId) {
    const input = document.getElementById(elementId);
    const button = input.nextElementSibling;
    if (input.type === 'password') {
        input.type = 'text';
        button.innerHTML = ICONS.eye;
    } else {
        input.type = 'password';
        button.innerHTML = ICONS['eye-off'];
    }
}

function updateDisplayName() {
    const input = document.getElementById('display-name');
    state.user.name = input.value || 'Anonymous User';
    showMessage('Display name updated!');
}

function signOut() {
    showMessage('Signed out successfully!');
    // In a real app, this would clear session data and redirect to login
}

function openPostModal(postIndex) {
    const post = state.posts[postIndex];
    const modal = document.getElementById('post-modal');
    const modalContent = modal.querySelector('.post-modal-content');
    
    modalContent.innerHTML = `
        <div class="post-card">
            <div class="post-header">
                <div class="post-type">
                    ${getPostTypeIcon(post.type)}
                    ${post.type} • ${post.author}
                </div>
                <button class="action-button report-button" onclick="event.stopPropagation(); reportPost(${postIndex})" title="Report Misinformation">
                    ${ICONS['alert-triangle']}
                    <span class="report-count">${post.reportCount}</span>
                </button>
            </div>
            <div class="post-title">${post.title}</div>
            ${post.imageUrl ? `
                <div class="post-image">
                    <img src="${post.imageUrl}" alt="Post image" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            ` : `
                <div class="post-image">
                    ${ICONS.image}
                </div>
            `}
            <div class="post-content expanded">
                ${post.content}
            </div>
            <div class="post-actions">
                <button class="action-button ${post.liked ? 'liked' : ''}" onclick="event.stopPropagation(); handleLike(${postIndex})">
                    <span class="heart-icon">${post.liked ? ICONS['heart-filled'] : ICONS.heart}</span>
                    ${post.likes || 0}
                </button>
                <button class="action-button" onclick="event.stopPropagation(); toggleComments(${postIndex})">
                    ${ICONS.comment}
                    ${post.comments?.length || 0}
                </button>
                <button class="action-button" onclick="event.stopPropagation(); handleShare(${postIndex})">
                    ${ICONS.share}
                </button>
            </div>
            ${post.showComments ? `
                <div class="comments-section">
                    ${(post.comments || []).map(comment => `
                        <div class="comment">
                            <div class="comment-author">${comment.author}</div>
                            <div class="comment-content">${comment.content}</div>
                        </div>
                    `).join('')}
                    <div class="comment-input-container">
                        <input type="text" 
                            class="comment-input" 
                            placeholder="Add a comment..."
                            onkeypress="handleCommentInput(event, ${postIndex})">
                    </div>
                </div>
            ` : ''}
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePostModal() {
    const modal = document.getElementById('post-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function renderPosts(postsToRender = state.posts) {
    const feed = document.getElementById('feed');
    
    if (postsToRender.length === 0) {
        feed.innerHTML = `
            <div style="text-align: center; padding: 32px; color: var(--text-secondary);">
                ${ICONS.search}
                <p style="margin-top: 16px;">No posts found</p>
            </div>
        `;
    } else {
        feed.innerHTML = postsToRender.map((post, index) => `
            <div class="post-card" onclick="openPostModal(${index})">
                <div class="post-header">
                    <div class="post-type">
                        ${getPostTypeIcon(post.type)}
                        ${post.type} • ${post.author}
                    </div>
                    <button class="action-button report-button" onclick="event.stopPropagation(); reportPost(${index})" title="Report Misinformation">
                        ${ICONS['alert-triangle']}
                        <span class="report-count">${post.reportCount}</span>
                    </button>
                </div>
                <div class="post-title">${post.title}</div>
                ${post.imageUrl ? `
                    <div class="post-image">
                        <img src="${post.imageUrl}" alt="Post image" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                ` : `
                    <div class="post-image">
                        ${ICONS.image}
                    </div>
                `}
                <div class="post-content">
                    ${post.content}
                </div>
                <div class="post-actions" onclick="event.stopPropagation()">
                    <button class="action-button ${post.liked ? 'liked' : ''}" onclick="handleLike(${index})">
                        <span class="heart-icon">${post.liked ? ICONS['heart-filled'] : ICONS.heart}</span>
                        ${post.likes || 0}
                    </button>
                    <button class="action-button" onclick="toggleComments(${index})">
                        ${ICONS.comment}
                        ${post.comments?.length || 0}
                    </button>
                    <button class="action-button" onclick="handleShare(${index})">
                        ${ICONS.share}
                    </button>
                </div>
                ${post.showComments ? `
                    <div class="comments-section">
                        ${(post.comments || []).map(comment => `
                            <div class="comment">
                                <div class="comment-author">${comment.author}</div>
                                <div class="comment-content">${comment.content}</div>
                            </div>
                        `).join('')}
                        <div class="comment-input-container">
                            <input type="text" 
                                class="comment-input" 
                                placeholder="Add a comment..."
                                onkeypress="handleCommentInput(event, ${index})">
                        </div>
                    </div>
                ` : ''}
            </div>
        `).join('');
    }
    initializeIcons();
}


function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(tabId).style.display = 'block';
    document.querySelector(`[onclick="switchTab('${tabId}')"]`).classList.add('active');
}


function toggleComments(postIndex) {
    state.posts[postIndex].showComments = !state.posts[postIndex].showComments;
    renderPosts();
}

function handleCommentInput(event, postIndex) {
    if (event.key === 'Enter' && event.target.value.trim()) {
        const newComment = {
            author: document.getElementById('anonymous-toggle')?.checked ? 'Anonymous' : 'User',
            content: event.target.value.trim(),
            timestamp: new Date()
        };
        
        if (!state.posts[postIndex].comments) {
            state.posts[postIndex].comments = [];
        }
        
        state.posts[postIndex].comments.push(newComment);
        showMessage('Comment added!');
        event.target.value = '';
        renderPosts();
    }
}

// Chat Management
function renderChats(chatsToRender = state.chats) {
    const chatList = document.getElementById('chat-list');
    
    if (chatsToRender.length === 0) {
        chatList.innerHTML = `
            <div style="text-align: center; padding: 32px; color: var(--text-secondary);">
                ${ICONS.search}
                <p style="margin-top: 16px;">No chats found</p>
            </div>
        `;
    } else {
        chatList.innerHTML = chatsToRender.map(chat => `
            <div class="chat-item">
                <div class="chat-avatar">
                    ${ICONS.user}
                </div>
                <div class="chat-details">
                    <div class="chat-name">${chat.name}</div>
                    <div class="chat-preview">${chat.preview}</div>
                </div>
            </div>
        `).join('');
    }
}

// Post Actions
function handleLike(postIndex) {
    const post = state.posts[postIndex];
    if (!post.liked) {
        post.likes = (post.likes || 0) + 1;
        post.liked = true;
        showMessage('Post liked!');
    } else {
        post.likes = Math.max(0, post.likes - 1);
        post.liked = false;
        showMessage('Post unliked');
    }
    renderPosts();
}

function handleComment(postIndex) {
    const post = state.posts[postIndex];
    post.comments = (post.comments || 0) + 1;
    showMessage('Comment added!');
    renderPosts();
}

function handleShare(postIndex) {
    showMessage('Share functionality coming soon!');
}

// Create Post
function publishStory() {
    const title = document.getElementById('story-title').value;
    const content = document.getElementById('story-content').value;
    
    if (!title.trim()) {
        showMessage('Please enter a title for your story', true);
        return;
    }
    
    if (!content.trim()) {
        showMessage('Please write some content for your story', true);
        return;
    }

    const isAnonymous = document.getElementById('anonymous-toggle').checked;
    const isOpinion = document.getElementById('opinion-toggle').checked;
    const isBreaking = document.getElementById('breaking-toggle').checked;
    
    const newPost = {
        id: state.posts.length + 1,
        title: title,
        type: isBreaking ? 'Breaking' : isOpinion ? 'Opinion' : 'Story',
        author: isAnonymous ? 'Anonymous' : state.user.name,
        content: content,
        timestamp: new Date(),
        likes: 0,
        reports: [],
        reportCount: 0,
        comments: [],
        imageUrl: document.querySelector('.image-upload img')?.src
    };
    
    state.posts.unshift(newPost);
    showMessage('Story published successfully!');
    
    // Reset form
    document.getElementById('story-title').value = '';
    document.getElementById('story-content').value = '';
    document.querySelector('.image-upload').innerHTML = `
        ${ICONS['image-plus']}
        <p style="margin-top: 12px; color: var(--text-secondary);">Upload Cover Image</p>
        <input type="file" id="image-upload" hidden accept="image/*">
    `;
    
    showPage('home-page');
}

// Image Upload
function triggerImageUpload() {
    document.getElementById('image-upload').click();
}

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.querySelector('.image-upload').innerHTML = `
                <img src="${e.target.result}" style="max-width: 100%; max-height: 200px; object-fit: contain;">
                <p style="margin-top: 12px; color: var(--text-secondary);">Click to change image</p>
                <input type="file" id="image-upload" hidden accept="image/*">
            `;
        };
        reader.readAsDataURL(file);
        showMessage('Image uploaded successfully!');
    }
}

// Search
function initializeSearch() {
    document.querySelectorAll('.search-bar').forEach(searchBar => {
        searchBar.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            
            if (this.closest('#home-page')) {
                const filteredPosts = state.posts.filter(post => 
                    post.content.toLowerCase().includes(searchTerm) || 
                    post.type.toLowerCase().includes(searchTerm) ||
                    post.author.toLowerCase().includes(searchTerm)
                );
                renderPosts(filteredPosts);
            } else if (this.closest('#messages-page')) {
                const filteredChats = state.chats.filter(chat =>
                    chat.name.toLowerCase().includes(searchTerm) ||
                    chat.preview.toLowerCase().includes(searchTerm)
                );
                renderChats(filteredChats);
            }
        });
    });
}

function toggleFAQ(element) {
    // Toggle the active class on the question
    element.classList.toggle('active');
    
    // Get the answer element
    const answer = element.nextElementSibling;
    
    // Toggle the active class on the answer
    answer.classList.toggle('active');
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeIcons();
    renderPosts();
    renderChats();
    initializeSearch();
    
    // Set up image upload listener
    document.getElementById('image-upload').addEventListener('change', handleImageUpload);

    // Initialize profile page
    initializeProfile();
    
    const userIcon = document.querySelector('[data-icon="user"]');
    userIcon.style.cursor = 'pointer';
    userIcon.addEventListener('click', () => {
        showPage('profile-page');
        initializeProfile(); // Reinitialize when showing the profile page
    });

    // Close modal when clicking outside
    document.getElementById('report-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeReportModal();
        }
    });

    // Add modal click handler
    document.getElementById('post-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closePostModal();
        }
    });
});