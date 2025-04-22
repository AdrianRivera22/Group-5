    /* Admin Dashboard Styles */
    // ---------- Update Stat Counters ----------
    function updateStats() {
      document.getElementById('total-stores').textContent =
        document.querySelectorAll('#products tbody tr').length;
  
      document.getElementById('total-users').textContent =
        document.querySelectorAll('#users tbody tr').length;
    }
  
    // ---------- Store Management ----------
    document.querySelector('#products .btn').addEventListener('click', () => {
      const tableBody = document.querySelector('#products tbody');
      const newRow = document.createElement('tr');
      const newId = Date.now();
      newRow.innerHTML = `
        <td>${newId}</td>
        <td>New Store</td>
        <td>
          <button class="btn edit-btn">Edit</button>
          <button class="btn btn-danger delete-btn">Delete</button>
        </td>
      `;
      tableBody.appendChild(newRow);
      attachStoreRowEvents(newRow);
      updateStats();
    });
  
    function attachStoreRowEvents(row) {
      const editBtn = row.querySelector('.edit-btn');
      const deleteBtn = row.querySelector('.delete-btn');
  
      editBtn.addEventListener('click', () => {
        const nameCell = row.children[1];
        const newName = prompt("Edit Store Name:", nameCell.textContent);
        if (newName) nameCell.textContent = newName;
      });
  
      deleteBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to delete this store?")) {
          row.remove();
          updateStats();
        }
      });
    }
  
    document.querySelectorAll('#products tbody tr').forEach(attachStoreRowEvents);
  
    // ---------- Initial Stats ----------
    updateStats();

  
  
